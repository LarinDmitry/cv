import Header from './Components/Header';
import Presentation from './Components/Presentation';
import ParticlesBackground from './Components/ParticlesBackground';
import CurrentWork from './Components/CurrentWork';
import About from './Components/About';
import Stats from './Components/Stats';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';
import ScrollProgress from './Components/ScrollProgress';
import PageLoader from './Components/PageLoader';
import {getTotalYearsOfExperience} from './utils/dateUtils';

const Home = () => {
  const yearsOfExperience = getTotalYearsOfExperience();

  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://larindmitry.github.io/cv/#person',
    name: 'Larin Dmytro',
    alternateName: ['Larin Dmytro Anatiolievich', 'Larin Dmytro'],
    givenName: 'Larin',
    familyName: 'Dmytro',
    jobTitle: 'Tech Lead Front-End',
    description: `Tech Lead Front-End with ${yearsOfExperience}+ years of professional experience building modern web applications using React and TypeScript and JavaScript. Specialized in creating responsive, accessible, and performant user interfaces for healthcare, fintech, and enterprise applications. Currently leading front-end development at Mascode in Ukraine, Kiev.`,
    url: 'https://larindmitry.github.io/cv',
    email: 'mailto:larin.dm.an@gmail.com',
    telephone: '+380938839926',
    image: {
      '@type': 'ImageObject',
      url: 'https://larindmitry.github.io/cv/images/profile.jpeg',
      caption: 'Larin Dmytro - Tech Lead Front-End',
    },
    sameAs: ['https://www.linkedin.com/in/larindmitriy/', 'https://github.com/LarinDmitry'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ukraine',
      addressCountry: 'Kiev',
    },
    workLocation: {
      '@type': 'Place',
      name: 'Ukraine, Kiev',
    },
    knowsAbout: [
      'Front-End Development',
      'Web Development',
      'Full Stack Development',
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
      'Redux',
      'State Management',
      'Material UI',
      'Bootstrap',
      'Sass',
      'Jest',
      'Unit Testing',
      'Storybook',
      'Git',
      'Figma',
      'UI/UX Design',
      'Agile Development',
      'RESTful APIs',
      'GraphQL',
      'Performance Optimization',
      'Accessibility',
      'Mobile-first Design',
      'Single Page Applications',
      'Progressive Web Apps',
      'Fintech Applications',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Tech Lead Front-End',
      occupationalCategory: '15-1254.00',
      skills: 'React and TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Redux, Material UI, Node.js',
      experienceRequirements: `${yearsOfExperience} years`,
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Mascode',
      description: 'Technology Company',
    },
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'Ukraine',
        alternateName: 'uk',
      },
      {
        '@type': 'Language',
        name: 'Russian',
        alternateName: 'ru',
      },
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Larin Dmytro - Tech Lead Front-End Portfolio',
    alternateName: 'Larin Dmytro Portfolio',
    url: 'https://larindmitry.github.io/cv',
    description:
      'Professional portfolio of Larin Dmytro, a Tech Lead Front-End specializing in React and TypeScript. Available for hire in Ukraine, Kiev.',
    author: {
      '@id': 'https://larindmitry.github.io/cv/#person',
    },
    inLanguage: 'en',
  };

  const jsonLdProfilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': 'https://larindmitry.github.io/cv/#person',
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What technologies does Larin Dmytro specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Larin Dmytro is a Tech Lead Front-End with ${yearsOfExperience}+ years of experience specializing in React and TypeScript and JavaScript. He also has expertise in Tailwind CSS, Redux, Node.js, and modern web development practices.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is Larin Dmytro available for hire in Ukraine, Kiev?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Larin Dmytro is currently based in Ukraine, Kiev and is open to new opportunities in front-end development. He is available for full-time, contract, and remote positions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries has Larin Dmytro worked in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Larin Dmytro has extensive experience in healthcare technology (Mascode), fintech and payment solutions, accounting software, and social platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Larin Dmytro for job opportunities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach Larin Dmytro via email at larin.dm.an@gmail.com or phone at +380 93 883 9926. You can also connect on LinkedIn or view his work on GitHub.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdPerson)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdWebsite)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdProfilePage)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdFAQ)}} />
      <PageLoader />
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Presentation />
        <ParticlesBackground />
        <About />
        <CurrentWork />
        <Projects />
        <Skills />
        <Experience />
        <Stats />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
};

export default Home;
