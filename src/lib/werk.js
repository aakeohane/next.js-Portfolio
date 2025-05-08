let cssIcon = "/images/utilities/CSS3_icon.png"
let jsIcon = "/images/utilities/JS-icon.png"
let htmlIcon = "/images/utilities/html5-icon.png"
let reactIcon = "/images/utilities/react_native_icon.png"
let jsonIcon = "/images/utilities/Json-icon.png"
let webpackIcon = "/images/utilities/logo-on-white-bg.png"
let firebaseIcon = "/images/utilities/firebase-icon.png"
let wordpressIcon = "/images/utilities/Wordpress-icon.png"

const werk = [
  {
    "title": "React Pokédex",
    "favicon": "/images/pokeball.png",
    "slug": "react-pokedex",
    "order": "5",
    "titleDescription": `A fun frontend project going back to the roots of my childhood and the foundation of Web Dev -- JavaScript!`,    
    "image": "/images/poke-screenshot.png",
    
    "githubLink": "https://github.com/aakeohane/React-Pokedex",
    "liveSiteLink": {
      "newVersion": "https://aakeohane.github.io/React-Pokedex/",
      "oldVersion": "https://aakeohane.github.io/Pokedex/"},
    "programsUsed": [
      cssIcon,
      jsIcon,
      reactIcon,
      jsonIcon
      ],
    "description": `I know, I know. Not another Pokédex. I had originally used an IIFE with vanilla JS as part of my studies to create the 
    infamous project. However, I wanted to challenge myself to see how much I have progressed, so I decided to remake this project taking 
    advantage of all the newfound skills I learned in both React and CSS. I connect to an external API which allows you to search for any 
    Pokémon within the database. I also made use of CSS to design my own modal whereas previously I used Bootstrap. 
    I have the original code linked below,take a look at my progress.`
  },
  {
    "title": "Quizzical",
    "favicon": "/images/favicon.ico",
    "slug": "quizzical",
    "order": "2",
    "titleDescription": "Small application pulling data from the Open Trivia Database to generate random questions.",  
    "image": "/images/quizzical-cover1.png",  
    "imageContent": "/images/react-trivia-screenshot.png",
    "liveSiteLink": "https://aakeohane.github.io/react-trivia/",
    "githubLink": "https://github.com/aakeohane/react-trivia",
    "programsUsed": [
      cssIcon,
      jsIcon,
      reactIcon,
      jsonIcon
      ],
    "description": `Small application pulling data from the Open Trivia Database to generate random questions. I used 
    React and utilized the useState and useEffect hooks. The app design was based upon a Figma mockup. I most recently added a 
    settings tab to customize the category and difficulty. Test your knowledge! Live site link below.`,
  },
  {
    "title": "Alpaca Image Generator",
    "favicon": "/images/alpacafavicon.ico",
    "slug": "alpaca-image-generator",
    "order": "3",
    "titleDescription": "I built this Single Page Application using React which allows users to customize the alpaca to match their style. They can then download it and show all their friends",  
    "image": "/images/alpaca-image-generator-cover.png",  
    "imageContent": "/images/alpaca-generator-screenshot.png",
    "githubLink": "https://github.com/aakeohane/alpaca-generator/",
    "liveSiteLink": "https://aakeohane.github.io/alpaca-generator/",
    "programsUsed": [
      cssIcon,
      jsIcon,
      reactIcon
      ],
    "description": `This project was based upon a DevProjects brief. While they provided the images, I solved the problems and developed everything else including the
     front-end UI. I utilized a downloading library which I have never used before. Please checkout the website and download your very own alpaca image.`
  },
  {
    "title": "weChat",
    "slug": "weChat",
    "favicon": "",
    "order": "6",
    "titleDescription": "A messaging application for your phone",    
    "image": "/images/myFlix-screenshot.png",
    "githubLink": "",
    "liveSiteLink": "",
    "programsUsed": [
      cssIcon,
      jsIcon,
      reactIcon
      ],
    "description": `weChat is a messaging application I built with Expo and React Native utilizing the popular 
    Gifted Chat library. Messages are stored in Google Firebase and users are able to look back through 
    messages while offline. This was my first project making use of Firebase and has since allowed me to streamline future projects
    requiring some sort of external database`
  },
  {
    "title": "Club Counter Chrome Extension",
    "slug": "club-counter",
    "favicon": "",
    "order": "1",
    "titleDescription": "A chrome extension for use at a club to keep track of number of people and the Wordpress code snippet used to show website vitiors the number",
    "image": "/images/club-counter-cover.jpg",
    "imageContent": "/images/chrome-extension-counter.png",
    "githubLink": "https://github.com/aakeohane/csd-chrom-extension-frontend",
    "githubLink": "https://github.com/aakeohane/club-sd-counter",
    "liveSiteLink": "https://aakeohane.github.io/csd-chrom-extension-frontend/",
    "programsUsed": [
      cssIcon,
      jsIcon,
      reactIcon,
      firebaseIcon,
      webpackIcon,
      wordpressIcon
      ],
    "description": `This is a two part project. While the example is relatively simple for showcasing reasons. The number counter on the right side
    is actually used as a chrome extension to keep track of the amount of guests at a club. This number is then stored in a Firebase Realtime Database
    and will render in real-time on the clubs website so that vistors can track how many people are currently at the club. I had to learn how to use webpack 
    from scratch and learned about service workers in relation to chrome extensions as google had relatively strict requirements for the application to be approved as a chrome extension.`
  },
  {
    "title": "Wordle",
    "favicon": "",
    "slug": "wordle",
    "order": "4",
    "titleDescription": "my homemade personal wordle clone",    
    "image": "/images/wordle-cover.png",
    "liveSiteLink": "https://aakeohane.github.io/Wordle-clone/",
    "githubLink": "https://github.com/aakeohane/Wordle-clone",
    "programsUsed": [
      htmlIcon,
      cssIcon,
      jsIcon,
      ],
    "description": `I made this for fun to see if I could duplicate the infamous Wordle game. It seemed simple at first, however, I ran into a few issues
    that I was able to solve and learned a lot in the process. I used a tutorial for the keyboard implementation as I have never done that before, however, the
    logic for solving the problem was enhanced and I embelllished the CSS`,
  },
]

// use this to filter based on some sort of criteria
const getAllWerkData = () => {
  werk.sort((a,b) => a.order - b.order);
  return werk
}

const getWork = (slug) => {
  return werk.find(project => project.slug === slug)
}

export { getAllWerkData, getWork }