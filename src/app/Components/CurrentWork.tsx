'use client';

import {motion, useInView, useAnimation} from 'framer-motion';
import {useRef, useEffect} from 'react';
import Image from 'next/image';
import {
  CodeBracketIcon,
  SparklesIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

// Highlight card variants with stagger
const cardContainerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: {opacity: 0, y: 40, scale: 0.95},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Icon animation for highlight cards
const iconContainerVariants = {
  initial: {scale: 1},
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

const CurrentWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});
  const mainControls = useAnimation();

  useEffect(() => {
    isInView && mainControls.start('visible');
  }, [isInView, mainControls]);

  const highlights = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: 'React Architecture',
      description:
        'Designing scalable React architectures, defining patterns, and ensuring long-term maintainability across large applications',
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'AI-Augmented Development',
      description:
        'Integrating modern AI tools into development workflows to accelerate engineering productivity and innovation',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Performance Engineering',
      description:
        'Optimizing rendering, bundle size, and runtime performance to ensure responsive and scalable web applications',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Technical Leadership',
      description:
        'Leading front-end teams, mentoring engineers, and establishing engineering standards that enable teams to deliver with confidence',
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Platform Development',
      description:
        'Building internal platforms, shared component systems, and developer tooling that accelerate product development',
    },
    {
      icon: <BuildingOffice2Icon className="w-8 h-8" />,
      title: 'Product Engineering',
      description:
        'Bridging product vision and engineering execution to deliver reliable and scalable user experiences',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10"
      id="current-work"
    >
      <motion.div
        className="max-w-6xl w-full"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5}}
      >
        {/* Badge with floating animation */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{opacity: 0, y: -20}}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: [0, -5, 0],
                }
              : {}
          }
          transition={{
            opacity: {duration: 0.4},
            y: {duration: 2, repeat: Infinity, ease: 'easeInOut' as const},
          }}
        >
          <span className="px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold">
            CURRENTLY WORKING AT
          </span>
        </motion.div>

        {/* Company Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Animated Logo with pulsing glow */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{opacity: 0, scale: 0.5}}
            animate={isInView ? {opacity: 1, scale: 1} : {}}
            transition={{
              type: 'spring' as const,
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            <motion.div
              className="relative w-40 h-40"
              whileHover={{scale: 1.08}}
              transition={{type: 'spring', stiffness: 300, damping: 20}}
            >
              {/* Animated glow rings */}
              <motion.div
                className="absolute -inset-4 bg-violet-600/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-violet-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <Image
                src="/cv/images/mascode.png"
                alt="Mascode"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-2xl rounded-full relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Company Name with letter animation */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{
              type: 'spring' as const,
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
          >
            <motion.span
              animate={
                isInView
                  ? {
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }
                  : {}
              }
              transition={{duration: 5, repeat: Infinity}}
              style={{
                backgroundImage: 'linear-gradient(90deg, #ffffff, #c4b5fd, #a78bfa, #c4b5fd, #ffffff)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mascode
            </motion.span>
          </motion.h2>

          {/* Role with badge effect */}
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={isInView ? {opacity: 1, scale: 1} : {}}
            transition={{delay: 0.4, type: 'spring' as const, stiffness: 200}}
          >
            <motion.p className="text-xl md:text-2xl text-violet-400 font-semibold mb-2" whileHover={{scale: 1.02}}>
              Tech Lead Front-End
            </motion.p>
          </motion.div>

          {/* Location and dates */}
          <motion.p
            className="text-gray-400 text-lg mb-6 md:mb-8"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.5, duration: 0.5}}
          >
            Ukraine, Kiev • June 2023 - Present • Remote
          </motion.p>

          {/* Description with fade-in */}
          <motion.p
            className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.6, duration: 0.6}}
          >
            Leading front-end development for a cutting-edge multilanguage healthcare platform that empowers hospitals
            and clinics worldwide to deliver exceptional patient care. Architecting robust React solutions while
            pioneering the integration of the latest AI tools to revolutionize development processes.
          </motion.p>
        </div>

        {/* Highlights Grid with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-16"
          variants={cardContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 group backdrop-blur-sm cursor-default hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300"
              variants={cardVariants}
            >
              {/* Icon with hover animation */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="text-violet-400 group-hover:text-violet-300 transition-colors flex-shrink-0"
                  variants={iconContainerVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                  >
                    {highlight.icon}
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action with enhanced hover */}
        <motion.div
          className="text-center mt-8 md:mt-16"
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{delay: 1.2, duration: 0.5}}
        >
          <motion.a
            href="https://mascode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-violet-900 text-white font-semibold rounded-lg shadow-lg shadow-violet-900/50 overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
            }}
            whileTap={{scale: 0.95}}
          >
            {/* Button shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{x: '-100%'}}
              whileHover={{x: '100%'}}
              transition={{duration: 0.6}}
            />
            <span className="relative z-10">Learn About Mascode</span>
            <motion.div
              className="relative z-10"
              animate={{x: [0, 3, 0]}}
              transition={{duration: 1.5, repeat: Infinity}}
            >
              <ArrowUpRightIcon className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CurrentWork;
