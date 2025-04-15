import Image from 'next/image';

import * as style from './style.css';

export const LandingPotential = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>{"Unlock Your AI Agent's Potential"}</div>

      <div className={style.features}>
        <div className={style.feature}>
          <div className={style.imageWrapper}>
            <Image
              src={'/images/image-feature-1.png'}
              alt="potential"
              width={668}
              height={380}
              className={style.image}
            />
          </div>
          <div className={style.featureText}>Transfer Knowledge between Agents and Platforms</div>
        </div>
        <div className={style.feature}>
          <div className={style.imageWrapper}>
            <Image
              src={'/images/image-feature-3.png'}
              alt="potential"
              width={668}
              height={380}
              className={style.image}
            />
          </div>
          <div className={style.featureText}>Monetize Agent Experiences</div>
        </div>
        <div className={`${style.feature} ${style.last}`}>
          <div className={style.imageWrapper} style={{}}>
            <div className={style.imageInnerWrapper}>
              <Image
                src={'/images/image-feature-2.png'}
                alt="potential"
                width={624}
                height={270}
                className={style.image}
              />
            </div>
          </div>
          <div className={style.featureText}>
            Access LLM-Ready External Knowledge for your Agents
          </div>
        </div>
      </div>
    </div>
  );
};
