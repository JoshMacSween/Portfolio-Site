import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Josh MacSween', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'This is my portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Josh MacSween',
  subtitle: 'JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'joshProfile.jpeg',
  paragraphOne: 'I am a self-taught software developer local to Edmonton, Alberta, Canada.',
  paragraphTwo:
    'I enjoy working in the MERN stack, though I also have skills in Ruby on Rails and Python.',
  paragraphThree:
    'Programming is my greatest passion - I am always looking to learn new techniques and improve my skills.',
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
    info2: 'In this project I used React, Bootstrap, Axios and FireBase',
    url: '',
    repo: 'https://github.com/JoshMacSween/FilmBuffs', // if no repo, the button will not show up
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
  cta: '',
  btn: '',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
