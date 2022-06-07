// PRIMITIVES
let name = "Jason"; // String
let age = 28; // number
let isPensioner = false; // Boolean
let canDance; // Undefined
let awards = null; // Null

// Reference Types

// Object
const person = {
  name: "Jason",
  age: 28,
  isPensioner: false,
};

console.log(person);

// Array
const projects = [
  {
    title: "Project 1",
    imgURL: "https://picsum.photos/200/300?random=1",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "Project 2",
    imgURL: "https://picsum.photos/200/300?random=2",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "Project 3",
    imgURL: "https://picsum.photos/200/300?random=3",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "Project 4",
    imgURL: "https://picsum.photos/200/300?random=4",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "Project 5",
    imgURL: "https://picsum.photos/200/300?random=5",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "Project 6",
    imgURL: "https://picsum.photos/200/300?random=6",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
];

const projectContainer = document.getElementById("projects");

projects.forEach((project) => {
  projectContainer.innerHTML += `
    <h3>${project.title}</h3>
    <img src=${project.imgURL} />
  `;
});
