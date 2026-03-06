'use client';

import React, {useRef, useEffect} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import TimelineElement from './TimelineElement';
import Image from 'next/image';
import {motion, useInView, useAnimation} from 'framer-motion';

const experiencesData = [
  {
    date: 'Jun, 2023 - Present',
    icon: <Image className="rounded-full" src="/images/mascode.png" width={100} height={100} alt="Mascode" />,
    title: 'Tech Lead Front-End',
    location: 'Mascode - Ukraine, Kiev',
    description:
      'As a Frontend Tech Lead, I defined the architecture and technical direction of a large-scale React platform, establishing scalable patterns for state management, data fetching, and application structure using TypeScript, Redux Toolkit, and React Query. I introduced a microfrontend architecture that enabled independent development across teams and improved the scalability of the product. In addition to application architecture, I helped build a sustainable frontend platform by improving build tooling with Vite, developing shared UI components based on Material UI and styled-components, and introducing engineering standards that improved code quality and maintainability. I also mentored engineers, led code reviews, and collaborated closely with product and backend teams to ensure technical decisions supported long-term product growth and performance',
    url: 'https://mascode.com/',
  },
  {
    date: 'Oct, 2021 - May, 2023',
    icon: <Image className="rounded-full" src="/images/blend.png" width={100} height={100} alt="Blend" />,
    title: 'Tech Lead Front-End',
    location: 'BLEND Localization - Israel, Tel Aviv',
    description:
      'In this role, I led frontend development for a large-scale e-commerce platform built with React and TypeScript, focusing on creating a stable and scalable foundation for complex product and checkout flows. I established consistent patterns for application structure and state management using Redux Toolkit, helping the team maintain clarity and maintainability as the codebase and feature set expanded. A significant part of the work involved integrating with external payment systems and ensuring reliable communication between the frontend and payment providers to support secure and seamless checkout experiences. I also improved the frontend platform by modernizing the build pipeline with Vite, developing reusable UI components with Material UI and styled-components, and introducing engineering standards that strengthened code quality and long-term maintainability. Alongside the technical direction, I mentored engineers, led code reviews, and worked closely with product and backend teams to deliver features that supported the growth and reliability of the e-commerce platform',
    url: 'https://www.getblend.com/',
  },
  {
    date: 'Oct, 2019 - Jul, 2022',
    icon: <Image className="rounded-full" src="/images/rapid7.png" width={100} height={100} alt="Rapid7" />,
    title: 'Senior Software Engineer',
    location: 'Rapid7 - Israel, Tel Aviv / USA, Massachusetts',
    description:
      'As a Senior Frontend Engineer, I worked on a DevSecOps focused platform, building complex and highly interactive interfaces using React and TypeScript. A significant part of the work involved developing advanced data visualizations and monitoring dashboards, including both custom-built and library-based charts, with extensive use of Canvas to handle large data sets and real-time updates. I also implemented complex data-heavy interfaces such as configurable tables, forms, and management panels using Formik and Yup for form state and validation. The role required close collaboration with backend and DevOps teams to translate infrastructure and security data into clear, reliable UI workflows, while maintaining performance and stability in a feature-rich application',
    url: 'https://www.rapid7.com/',
  },
  {
    date: 'Oct, 2018 - Oct, 2019',
    icon: <Image className="rounded-full" src="/images/lenal.png" width={100} height={100} alt="Lenal" />,
    title: 'React Front-End Developer',
    location: 'LENAL - Ukraine, Kiev',
    description:
      'Contributed to the development of a banking web application using React, building reliable and user-focused interfaces for financial operations and account management. Implemented interactive UI components, handled complex form logic, and integrated frontend functionality with backend services to support secure and stable transactional workflows',
    url: 'https://lenal.eu',
  },
  {
    date: 'Mar, 2018 - Oct, 2018',
    icon: <Image className="rounded-full" src="/images/subj.png" width={100} height={100} alt="Subj" />,
    title: 'React Front-End Developer',
    location: 'Subj - Ukraine, Kiev',
    description:
      'Develop a client-side platform for a marketplace between a buyer and a verified beauty expert (diplomas, education, etc.)',
    url: 'https://subj.ua/',
  },
  {
    date: 'Oct, 2017 - Mar, 2018',
    icon: <Image className="rounded-full" src="/images/inlimited.png" width={100} height={100} alt="Inlimited" />,
    title: 'Web Front-End Developer',
    location: 'Inlimited - Ukraine, Kiev',
    description:
      'Developed a custom platform for analyzing social media content, enabling the tracking of keyword occurrences across posts and messages. The system also included emotional analysis capabilities and provided analytics dashboards for monitoring trends, user behavior, and message statistics based on the collected data',
    url: 'https://www.inlimited.ua',
  },
];

const Experience = () => {
  const Timeline = VerticalTimeline as any;
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});
  const mainControls = useAnimation();

  useEffect(() => {
    isInView && mainControls.start('visible');
  }, [isInView, mainControls]);

  return (
    <section
      className="relative w-full md:min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-b from-black/80 via-violet-900/10 to-black/80 z-10"
      id="experience"
    >
      <div className="max-w-7xl w-full px-4">
        {/* Header Section with enhanced animations */}
        <motion.div ref={ref} className="text-center mb-8 md:mb-16" initial="hidden" animate={mainControls}>
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
            CAREER JOURNEY
          </motion.span>

          {/* Title with reveal animation */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-6 overflow-hidden"
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <motion.span
              className="inline-block"
              initial={{y: 60, opacity: 0}}
              animate={isInView ? {y: 0, opacity: 1} : {}}
              transition={{
                type: 'spring' as const,
                stiffness: 100,
                damping: 12,
                delay: 0.3,
              }}
            >
              Professional Experience
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.5, duration: 0.6}}
          >
            A timeline of my professional growth, highlighting key roles and achievements in web development and
            software engineering.
          </motion.p>

          {/* Animated line decoration */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{delay: 0.6}}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
              initial={{width: 0}}
              animate={isInView ? {width: 200} : {}}
              transition={{delay: 0.7, duration: 0.8, ease: 'easeOut'}}
            />
          </motion.div>
        </motion.div>

        {/* Timeline with fade-in */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{delay: 0.8, duration: 0.6}}
        >
          <Timeline lineColor="#7C3AED">
            {experiencesData.map((item, index) => (
              <TimelineElement key={index} item={item} />
            ))}
          </Timeline>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="text-center mt-12"
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{delay: 1.2, duration: 0.5}}
        >
          <motion.a
            href="https://www.linkedin.com/in/larindmitriy/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-violet-900 text-white font-semibold rounded-lg shadow-lg shadow-violet-900/50 overflow-hidden group"
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
            <span className="relative z-10">Full Experience List</span>
            <svg
              className="relative z-10 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
