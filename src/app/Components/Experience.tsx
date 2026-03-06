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
      'Working as a lead Front-end specialist with the React stack, developing new features, implementing improvements, and solving bugs for a healthcare platform used by hospitals and clinics. Proficient with AI tools such as Claude code assistant, and similar technologies. My routine includes attending meetings, understanding the customer requirements, and collaborating with the team to find the best approach for each situation.',
    url: 'https://mascode.com/',
  },
  {
    date: 'Oct, 2021 - May, 2023',
    icon: <Image className="rounded-full" src="/images/blend.png" width={100} height={100} alt="Blend" />,
    title: 'Tech Lead Front-End',
    location: 'BLEND Localization - Israel, Tel Aviv',
    description:
      'Working at the external client Pagonxt (a global startup of Getnet) as a dedicated front-end developer specialized in React. I have been part of a squad focused on products for Mexico, where my routine involved bug resolution, development of new functionalities, attending meetings in Spanish with the Mexican client, coordinating and engaging in peer programming with junior and mid-level developers. This experience also provided me with a close understanding of the daily operations within a financial institution and allowed me to enhance my perception of security, project structure, and squads.',
    url: 'https://www.getblend.com/',
  },
  {
    date: 'Oct, 2019 - Jul, 2022',
    icon: <Image className="rounded-full" src="/images/rapid7.png" width={100} height={100} alt="Rapid7" />,
    title: 'Senior Software Engineer',
    location: 'Rapid7 - Israel, Tel Aviv / USA, Massachusetts',
    description:
      'Planning and production of new company applications with a focus on accounting software, where I led the squad. Collaborated with the team, primarily using React with Redux, ContextAPI, Web Socket, PDF generation, chat functionality, internationalization, responsive layout design, and integration with external services, among others...',
    url: 'https://www.rapid7.com/',
  },
  {
    date: 'Oct, 2018 - Oct, 2019',
    icon: <Image className="rounded-full" src="/images/lenal.png" width={100} height={100} alt="Lenal" />,
    title: 'React Front-End Developer',
    location: 'LENAL - Ukraine, Kiev',
    description:
      'Responsible for planning, production, and maintenance of company applications. Developed using Ruby on Rails, Mithriljs, React, Node, Angular, Laravel, and PostgreSQL. Handled infrastructure demands, data security, payment gateways, integration with external services, compliance with LGPD (General Data Protection Law), and domain management.',
    url: 'https://lenal.eu',
  },
  {
    date: 'Mar, 2018 - Oct, 2018',
    icon: <Image className="rounded-full" src="/images/subj.png" width={100} height={100} alt="Subj" />,
    title: 'React Front-End Developer',
    location: 'Subj - Ukraine, Kiev',
    description:
      'Infrastructure Leader and JS Developer. Provided in-person assistance and technical support for the system, as well as participated in application development.',
    url: 'https://subj.ua/',
  },
  {
    date: 'Oct, 2017 - Mar, 2018',
    icon: <Image className="rounded-full" src="/images/inlimited.png" width={100} height={100} alt="Inlimited" />,
    title: 'Web Front-End Developer',
    location: 'Inlimited - Ukraine, Kiev',
    description:
      'Infrastructure Leader and JS Developer. Provided in-person assistance and technical support for the system, as well as participated in application development.',
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
            <span className="relative z-10">More Here</span>
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
