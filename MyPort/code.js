const projects = [
    {
        title: 'Project 1',
        imgURL: 'https://picsum.photos/200/300?random=1',
        links:{
            live: '',
            github: ''
        }
    },
    {
        title: 'Project 2',
        imgURL: 'https://picsum.photos/200/300?random=2',
        links:{
            live: '',
            github: ''
        }
    },
    {
        title: 'Project 3',
        imgURL: 'https://picsum.photos/200/300?random=3',
        links:{
            live: '',
            github: ''
        }
    }
];

const projectContainer = document.getElementById("projects");

projects.forEach((project) => {
  projectContainer.innerHTML += `
    <h3>${project.title}</h3>
    <img src=${project.imgURL} />
  `;
});

const testimonials = [
    {
        title: 'Saleem',
        desc: 'I come to Life Choices'
    },
    {
        title: 'Ridhaa',
        desc: 'I come to Life Choices'
    },
    {
        title: 'Charles',
        desc: 'I come to Life Choices'
    }
];

const testimonialsContainer = document.getElementById('testimonials');

testimonials.forEach((testimonials) => {
    testimonialsContainer.innerHTML += `
    <h3>${testimonials.title}</h3>
    <h4>${testimonials.desc}</h4>`
});
