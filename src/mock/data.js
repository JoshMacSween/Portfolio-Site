import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Josh MacSween | Sofware Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'This is my portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Josh MacSween',
  subtitle: 'Welcome to my portfolio.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'joshProfile.jpeg',
  paragraphOne: 'I am a self-taught software developer local to Edmonton, Alberta, Canada.',
  paragraphTwo:
    "I enjoy working in the MERN stack, though I also have experience with Vue, Python, and Ruby on Rails, and I'm only too happy to start learning something new. I started learning software development three years ago, and it quickly became an obsession.",
  paragraphThree:
    'Programming is a great passion of mine, but I have many other interests too. Some of my other passions involve playing live music, studying film, powerlifting, craft beer, good coffee and good books.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'filmBuffsWizards.png',
    title: 'FilmBuffs',
    info:
      'In FilmBuffs, the client arrives at the site, searches for a film, and is presented data such as the director, runtime, actors, etc. Coming soon is user signup and a feature which allows users to add films to their watch list.',
    info2: 'In this project I used React, Bootstrap, and Axios',
    url: 'https://filmbuffs.netlify.app/',
    repo: 'https://github.com/JoshMacSween/FilmBuffs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drumCare.png',
    title: 'DrumCare',
    info:
      'In DrumCare, I have built a front end which displays cards containing various services that the business offers. There is an about page which explains the background of the team, and a form in which to contact the business which also collects important data from the customer, such as drum kit size, desired package and contact information.',
    info2:
      'In this project I used React, Bootswatch, and previously used nodemailer before deploying to netlify.',
    url: 'https://www.drumcare.ca/',
    repo: 'https://github.com/JoshMacSween/DrumCare', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta:
    "If you'd like to know more and speak with me further, don't be a stranger and click the button below",
  btn: 'Contact Me',
  email: 'joshmacsween@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joshmacsween/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JoshMacSween',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
