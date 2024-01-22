import { motion } from 'framer-motion';
import { Button, Wrapper } from '../components';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth } from '../utils/helper';
import { heroSection } from '../utils/portfolio';
import { slideUp } from '../animations';

const Hero = () => {
  const {
    subtitle,
    title,
    tagline1,
    tagline2,
    description1,
    description2,
  } = heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-12 xs:mt-0"
    >
      <motion.span
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.2] md:text-7xl text-4xl max-w-5xl font-bold"
      >
        {subtitle}
        <motion.span
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="font-rock-salt text-amber-900"
        >
          {title}
        </motion.span>
      </motion.span>

      <div>
        <motion.h2
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className=" md:text-5xl font-bold "
        >
          {tagline1}
        </motion.h2>
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className="max-w-xl text-base md:text-lg"
        >
          {description1}
        </motion.p>
      </div>

      <div>
        <motion.h2
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className=" md:text-5xl font-bold "
        >
          {tagline2}
        </motion.h2>
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className="max-w-xl text-base md:text-lg"
        >
          {description2}
        </motion.p>
      </div>
    </Wrapper>
  );
};

export default Hero;
