
const werk = [
  {
    "title": "React Pokédex",
    "favicon": "/images/pokeball.png",
    "slug": "react-pokedex",
    "order": "1",
    "titleDescription": "A fun frontend project going back to the roots of my childhood and the foundation of Web Dev, JavaScript.",    
    "image": "/images/poke-screenshot.png",
    "description": "I had originally used an IIFE with vanilla JS, but had some limitations, so I decided to remake this project taking advantage of React. I connected to an external API which allows you to search for any Pokémon within the database. I also made use of CSS to design my own modal whereas previously I used Bootstrap. I have the original code linked below, take a look at my progress."
  },
  {
    "title": "Quizzical",
    "favicon": "/images/favicon.ico",
    "slug": "quizzical",
    "order": "2",
    "titleDescription": "Small application pulling data from the Open Trivia Database to generate random questions.",    
    "image": "/images/react-trivia-screenshot.png",
    "description": "I used React and utilized the useState and useEffect hooks. The app design was based upon a Figma mockup. Test your knowledge, live site below. I most recently added a settings tab to customize the category and difficulty."
  },
  {
    "title": "Alpaca Image Generator",
    "favicon": "/images/alpacafavicon.ico",
    "slug": "alpaca-image-generator",
    "order": "3",
    "titleDescription": "I built this Single Page Application using React which allows users to generate and download their customized alpaca image.",    
    "image": "/images/alpaca-generator-screenshot.png",
    "description": "This project was based upon a DevProjects brief. While they provided the images, I developed everything else including the front-end UI."
  },
  {
    "title": "myFlix-React",
    "slug": "myFlix-react",
    "order": "4",
    "titleDescription": "",    
    "image": "/images/myFlix-screenshot.png",
    "description": "Utilizing the full MERN stack, React was used for the front-end of this movie application that interacts with my own API. Users can login, add their favorite movies to their profile and update/delete information following a React Redux flow."
  },
  {
    "title": "Fifth Project",
    "slug": "fifth-project",
    "order": "5",
    "titleDescription": "",    
    "image": "/images/case_filler.jpg",
    "description": "My cute face in watercolor!"
  },
  {
    "title": "Sixth Project",
    "slug": "sixth-project",
    "order": "6",
    "titleDescription": "",    
    "image": "/images/case_filler.jpg",
    "description": "My cute face in watercolor!"
  }
]

const getAllWerkData = () => {
  return werk
}

const getWork = (slug) => {
  return werk.find(project => project.slug === slug)
}

export { getAllWerkData, getWork }