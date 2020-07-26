module.exports = {
  siteTitle: 'Harris Zacharis | Software Engineer',
  siteDescription:
    'Harris Zacharis is a software engineer based in Larissa, GR who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Harris Zacharis, Harris, Zacharis, zacharisharris, software engineer, front-end engineer, ios developer, c#, university of macedonia, uom',
  siteUrl: 'https://zacharisharris.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Harris Zacharis',
  location: 'Larissa, GR',
  email: 'zacharisharris@gmail.com',
  github: 'https://github.com/zacharisharris',
  twitterHandle: '@zacharisharris',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zacharisharris',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/zacharisharris',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zacharisharris',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/zacharisharris',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
