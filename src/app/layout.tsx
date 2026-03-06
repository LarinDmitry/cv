import {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';
import {getTotalYearsOfExperience} from './utils/dateUtils';

const roboto = Roboto({subsets: ['latin'], weight: ['400', '700', '900']});

const yearsOfExperience = getTotalYearsOfExperience();

export const metadata: Metadata = {
  title: 'Larin Dmytro | Tech Lead Front-End & React Expert - Ukraine, Kiev',
  description: `Tech Lead Front-End with ${yearsOfExperience}+ years building enterprise web applications. Expert in React and TypeScript. Available for hire in Ukraine, Kiev. Specializing in fintech and enterprise software. Open to remote and on-site opportunities.`,
  keywords: [
    'front-end developer',
    'frontend developer',
    'front end developer',
    'front-end engineer',
    'frontend engineer',
    'web developer',
    'react developer',
    'react engineer',
    'nextjs developer',
    'next.js developer',
    'javascript developer',
    'typescript developer',
    'full stack developer',
    'senior frontend developer',
    'senior react developer',
    'lead frontend developer',
    'ui developer',
    'ui engineer',
    'software engineer',
    'software developer',

    // Technologies
    'React',
    'React.js',
    'Next.js',
    'NextJS',
    'TypeScript',
    'JavaScript',
    'ES6',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js',
    'Redux',
    'Material UI',
    'responsive design',
    'web development',
    'single page applications',
    'progressive web apps',

    // Location-based (Kiev focus)
    'developer Ukraine',
    'developer Kiev',
    'frontend developer Kiev',
    'frontend developer Ukraine',
    'react developer Ukraine',
    'react developer Kiev',
    'web developer Kiev',
    'web developer Ukraine',
    'hire developer Ukraine',
    'hire developer Kiev',
    'software engineer Ukraine',
    'software engineer Kiev',

    // Availability signals
    'available for hire',
    'looking for opportunities',
    'open to work',
    'contract developer',
    'freelance developer',
    'remote developer',
    'hybrid developer',

    // Experience and credentials
    `${yearsOfExperience} years experience`,
    'senior developer',
    'experienced developer',
    'professional developer',
    'lead developer',
    'fintech developer',

    // Industry expertise
    'fintech developer',
    'enterprise developer',
  ],
  authors: [{name: 'Larin Dmytro'}],
  creator: 'Larin Dmytro',
  publisher: 'Larin Dmytro',
  openGraph: {
    type: 'profile',
    locale: 'en_IE',
    url: 'https://larindmitry.github.io/cv/',
    title: 'Larin Dmytro | Tech Lead Front-End - React and TypeScript Expert',
    description: `Tech Lead Front-End with ${yearsOfExperience}+ years of experience. React and TypeScript expert. Available for hire in Ukraine, Kiev. Open to remote opportunities.`,
    siteName: 'Larin Dmytro - Tech Lead Front-End Portfolio',
    images: [
      {
        url: 'https://larindmitry.github.io/cv/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Larin Dmytro - Tech Lead Front-End specializing in React and TypeScript',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larin Dmytro | Tech Lead Front-End - React & TypeScript',
    description: `${yearsOfExperience}+ years experience. React and TypeScript. Available for hire in Ukraine.`,
    images: ['https://larindmitry.github.io/cv/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://larindmitry.github.io/cv',
  },
  manifest: '/cv/manifest.json',
  icons: {
    icon: '/cv/favicon.ico',
    shortcut: '/cv/favicon.ico',
  },
};

const RootLayout = ({children}: {children: ReactNode}) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <meta name="theme-color" content="#7C3AED" />
    </head>
    <body className={roboto.className} suppressHydrationWarning>
      {children}
    </body>
  </html>
);

export default RootLayout;
