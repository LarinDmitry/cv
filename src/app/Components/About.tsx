'use client';
import {useAnimation, useInView, motion} from 'framer-motion';
import {useEffect, useRef} from 'react';
import Image from 'next/image';
import {getTotalYearsOfExperience} from '../utils/dateUtils';

// Staggered container for industry cards
const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Card animation with 3D tilt effect
const cardVariants = {
  hidden: {opacity: 0, y: 50, rotateX: -15},
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// Text paragraph animation
const paragraphVariants = {
  hidden: {opacity: 0, y: 30},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});
  const mainControls = useAnimation();
  const yearsOfExperience = getTotalYearsOfExperience();

  useEffect(() => {
    isInView && mainControls.start('visible');
  }, [isInView, mainControls]);

  const industries = [
    {
      title: 'GovTech',
      description:
        'Specialized system for automate processes of pre-trial investigation, analytics and data exchange in criminal proceedings',
      logos: [{src: '/images/smereka.png', alt: 'Smereka'}],
    },
    {
      title: 'E-commerce',
      description:
        'Platforms that helps international businesses overcome cross-border barriers and increase revenue in new markets.',
      logos: [
        {src: '/images/blend.png', alt: 'Blend'},
        {src: '/images/subj.png', alt: 'Subj'},
      ],
    },
    {
      title: 'DevSecOps',
      description:
        'Tools empowers teams to proactively manage risk, accelerate DevSecOps, and enforce compliance across cloud envs.',
      logos: [{src: '/images/rapid7.png', alt: 'Rapid7'}],
    },
    {
      title: 'FoodTech',
      description: 'Food service establishments that automates and speeds up the work of cafes and restaurants.',
      logos: [{src: '/images/vaiter.webp', alt: 'Vaiter'}],
    },
    {
      title: 'FinTech',
      description: 'End-to-end banking infrastructure with advanced credit flows with optimizing lending funnels.',
      logos: [{src: '/images/money.png', alt: 'Money'}],
    },
    {
      title: 'SoftTech',
      description:
        'Unique technological solutions that facilitate digital transformation, security, and business automation.',
      logos: [{src: '/images/inlimited.png', alt: 'Inlimited'}],
    },
  ];

  const handleMarkUp = (start: string, main: string) => (
    <>
      {`${start} `}
      <motion.span className="text-violet-400 font-semibold" whileHover={{scale: 1.05}}>
        {main}
      </motion.span>{' '}
    </>
  );

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-black/80 to-black/80 z-10"
      id="about"
    >
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-16"
          variants={{
            hidden: {opacity: 0, y: 20},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration: 0.5, delay: 0.2}}
        >
          {/* Floating badge */}
          <motion.span
            className="inline-block px-4 py-2 bg-violet-900/50 border border-violet-700 rounded-full text-violet-300 text-sm font-semibold"
            initial={{opacity: 0, scale: 0.8, y: -20}}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              opacity: {duration: 0.4},
              scale: {type: 'spring' as const, stiffness: 200, damping: 15},
              y: {duration: 2, repeat: Infinity, ease: 'easeInOut' as const},
            }}
          >
            ABOUT ME
          </motion.span>

          {/* Title with gradient reveal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6"
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{
              type: 'spring' as const,
              stiffness: 100,
              damping: 12,
              delay: 0.3,
            }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I&apos;m Dmytro. Nice to meet you.
            </span>
          </motion.h2>

          {/* Animated paragraphs */}
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {handleMarkUp("I'm a", 'Frontend Tech Lead')}
              {handleMarkUp('with', '~10 years')}
              {handleMarkUp('in Frontend development,', '~9 years')}
              {handleMarkUp('working deeply with React, where ', '~4 years')}
              {handleMarkUp('React frontend Tech Lead, and', ' ~1 year')}
              in a formal Team Lead role.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              I specialize in building scalable frontend architectures and leading teams that deliver high-impact,
              production-grade applications. My focus goes beyond writing code — I design systems, define engineering
              standards, and help teams grow while shipping reliable, high-performance products.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Throughout my career, I’ve worked on complex web platforms where architecture decisions directly
              influenced business outcomes. I believe strong frontend leadership is a balance of technical excellence,
              product thinking, and mentorship.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              Whether it’s shaping technical strategy, optimizing performance, improving developer experience, or
              guiding engineers through growth paths, I aim to build systems — and teams — that scale.
            </motion.p>
          </div>

          {/* Industry Experience */}
          <motion.div
            className="max-w-6xl mx-auto mt-16"
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{delay: 0.6}}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{delay: 0.7, duration: 0.5}}
            >
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Industry Experience
              </span>
            </motion.h3>

            <motion.p
              className="text-lg text-gray-300 text-center mb-10 max-w-3xl mx-auto"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{delay: 0.8, duration: 0.5}}
            >
              Throughout my career, I&apos;ve had the privilege of building applications across diverse industries, each
              presenting unique challenges and opportunities for innovation.
            </motion.p>

            {/* Industry Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  variants={cardVariants}
                  className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-violet-500/50 hover:bg-gray-800/70 transition-all duration-300 group backdrop-blur-sm cursor-default"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="h-16 flex items-center justify-center gap-3 mb-4">
                      {industry.logos.map((logo, logoIndex) => (
                        <motion.div
                          key={logo.alt}
                          className="relative w-16 h-16"
                          initial={{opacity: 0, scale: 0}}
                          animate={isInView ? {opacity: 1, scale: 1} : {}}
                          transition={{
                            delay: 0.9 + index * 0.1 + logoIndex * 0.05,
                            type: 'spring' as const,
                            stiffness: 200,
                          }}
                          whileHover={{scale: 1.15, rotate: 5}}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain p-2 rounded-full border border-white"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <motion.h4
                      className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors text-center"
                      whileHover={{scale: 1.05}}
                    >
                      {industry.title}
                    </motion.h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-center">{industry.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
