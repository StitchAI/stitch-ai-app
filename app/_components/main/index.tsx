'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { color } from '@/assets/color';
import IconArrowNext from '@/assets/icon/icon-arrow-next.svg';
import IconLink from '@/assets/icon/icon-link.svg';
import stitch from '@/assets/lottie/stitch.json';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './style.css';

export const LandingMain = () => {
  const router = useRouter();
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.kv}>
          <motion.div
            initial={{ x: '-50%', y: 0 }}
            animate={animationDone ? { x: '-50%', y: -80 } : { x: '-50%', y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={style.lottieWrapper}
          >
            <Lottie
              animationData={stitch}
              autoPlay
              loop={false}
              onComplete={() => setAnimationDone(true)}
              className={style.lottie}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-50%', y: 40 }}
            animate={animationDone ? { opacity: 1, x: '-50%', y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={style.title}
          >
            {'Decentralized\nKnowledge Hub\nfor AI'}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={animationDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <ButtonPrimary
            text="Go to App"
            iconTrailing={<IconLink width={20} height={20} fill={color.white[100]} />}
            onClick={() => router.push('/get-started')}
            shadow
          />
        </motion.div>
      </div>
      <div className={style.contentMobile}>
        <div className={style.kv}>
          <motion.div
            initial={{ x: '-50%', y: 0 }}
            animate={animationDone ? { x: '-50%', y: -40 } : { x: '-50%', y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={style.lottieWrapper}
          >
            <Lottie
              animationData={stitch}
              autoPlay
              loop={false}
              onComplete={() => setAnimationDone(true)}
              className={style.lottie}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-50%', y: 20 }}
            animate={animationDone ? { opacity: 1, x: '-50%', y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={style.titleMobile}
          >
            {'Decentralized\nKnowledge Hub for AI'}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animationDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <ButtonPrimary
            text="Go to App"
            iconTrailing={<IconLink width={20} height={20} fill={color.white[100]} />}
            onClick={() => router.push('/get-started')}
            shadow
          />
        </motion.div>
      </div>
      <Banner />
    </div>
  );
};

const Banner = () => {
  return (
    <div className={style.banner}>
      <motion.div
        className={style.marqueeTrack}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: 'linear',
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div className={style.bannerContent} key={index}>
            <span className={style.bannerText}>
              <span>🏆</span> Winner of BNB AI Hack
            </span>
            <IconArrowNext width={25} height={24} fill={'#FFE900'} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
