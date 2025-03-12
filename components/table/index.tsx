'use client';

import type { Row, Table as RTable } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useEffect, useMemo, useRef } from 'react';
import { useIntersection } from 'react-use';

import { color } from '@/assets/color';
import IconDown from '@/assets/icon/icon-down.svg';

import * as style from './style.css';

interface ReactTableProps<D> {
  table: RTable<D>;
  ratio: (number | string)[];
  selectedRows?: string[];

  minWidth?: number;
  elementHeight?: number;
  maxHeight?: number | string;
  height?: number | string;

  more?: boolean; // click and fetch
  infinite?: boolean; // interact and fetch

  emptyText?: string;
  moreText?: string;

  backgroundColor?: string;

  handleRowClick?: (metadata: any) => void;

  hasNext?: boolean;
  fetchNext?: () => void;
}

export const Table = <D,>({
  table,

  ratio,
  selectedRows,

  minWidth = 500,
  elementHeight = 60,
  maxHeight = 500,
  height,

  more,
  infinite,

  emptyText,
  moreText,

  backgroundColor = 'rgba(255, 255, 255, 0.1)',

  handleRowClick,

  hasNext,
  fetchNext,
}: ReactTableProps<D>) => {
  const { rows } = table.getRowModel();

  const tableRef = useRef<HTMLDivElement>(null);
  const intersectionRef = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {});
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => elementHeight,
    getScrollElement: () => tableRef.current,
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 10,
  });

  const tableRatio = useMemo(
    () =>
      ratio
        .map(r => {
          if (typeof r === 'string') return `minmax(0, ${r})`;
          return `minmax(0, ${r}fr)`;
        })
        .join(' '),
    [ratio]
  );
  const length = useMemo(() => rows?.length, [rows?.length]);
  const isIntersecting = useMemo(() => intersection?.isIntersecting, [intersection]);
  const isScrolling = useMemo(
    () => (rowVirtualizer?.scrollOffset || 0) > 0,
    [rowVirtualizer?.scrollOffset]
  );

  useEffect(() => {
    if (!isIntersecting || !hasNext) return;
    fetchNext?.();
  }, [fetchNext, hasNext, isIntersecting]);

  return (
    <div data-table-container className={style.tableContainerStyle}>
      {/* {isScrolling && (
        <div className={style.scrollToTopStyle}>
          <IconButton
            size={'small'}
            icon={<IconArrowUp />}
            onClick={() => rowVirtualizer.scrollToOffset(0, { behavior: 'smooth' })}
          />
        </div>
      )} */}
      <div
        ref={tableRef}
        className={style.virtualizedWrapperStyle}
        style={assignInlineVars({
          [style.virtualizedMinWidth]: `${minWidth}px`,
          [style.virtualizedMaxHeight]:
            typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
          [style.virtualizedHeight]: typeof height === 'number' ? `${height}px` : height,
        })}
      >
        <div
          className={style.wrapperStyle}
          style={assignInlineVars({
            [style.backgroundColor]: backgroundColor,
          })}
        >
          <div
            className={style.headerStyle}
            style={assignInlineVars({
              [style.backgroundColor]: backgroundColor,
            })}
          >
            {table.getHeaderGroups().map(({ headers, id: headersId }) => (
              <div
                key={headersId}
                className={style.headerRowStyle}
                style={assignInlineVars({ [style.ratio]: tableRatio })}
              >
                {headers.map(({ id: id, isPlaceholder, column, getContext }) => (
                  <div
                    key={id}
                    onClick={column.getToggleSortingHandler()}
                    className={style.divStyle}
                  >
                    {isPlaceholder ? null : flexRender(column.columnDef.header, getContext())}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {length === 0 ? (
            <div
              className={style.emptyTextStyle}
              style={assignInlineVars({
                [style.backgroundColor]: backgroundColor,
              })}
            >
              {emptyText ?? 'No result'}
            </div>
          ) : (
            <>
              <div
                className={style.bodyStyle}
                style={assignInlineVars({
                  [style.bodyHeight]: `${rowVirtualizer.getTotalSize()}px`,
                  [style.backgroundColor]: backgroundColor,
                })}
              >
                {rowVirtualizer.getVirtualItems().map(virtualizedRow => {
                  const row = rows[virtualizedRow.index] as Row<D>;
                  const cells = row.getVisibleCells();

                  const metadata = row.getValue('metadata') as any;
                  const selected = selectedRows?.includes(metadata?.id);
                  const clickHandler = () => handleRowClick?.(metadata);

                  return (
                    <div
                      data-index={virtualizedRow.index}
                      ref={(node: Element | null | undefined) =>
                        rowVirtualizer.measureElement(node)
                      }
                      key={`${virtualizedRow.index}-${row.id}`}
                      className={style.bodyRowStyle({
                        selected: selected ? 'selected' : 'notSelected',
                        clickable: !!handleRowClick ? 'clickable' : 'notClickable',
                      })}
                      style={assignInlineVars({
                        [style.ratio]: tableRatio,
                        [style.bodyRowTransformY]: `${virtualizedRow.start}px`,
                      })}
                      onClick={clickHandler}
                    >
                      {cells.map(cell => {
                        return (
                          <div key={cell.id} className={style.divStyle}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              {more && (
                <div className={style.moreStyle} onClick={fetchNext}>
                  {moreText || 'Load more'}
                  {/* <IconDown width={20} height={20} fill={color.black[60]} /> */}
                </div>
              )}
              {hasNext && infinite && (
                <div className={style.intersectionStyle} ref={intersectionRef} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
