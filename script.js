$(function () {
    console.log('present')

    const vagabond = {
        title: 'Vagabond',
        image: './css/images/vagabond.png',
        technology: 'React, Rails, git branching',
        liveSite: 'https://jeclbond.herokuapp.com',
        gitHub: 'https://github.com/miknhoj/Vagabond_Project',
        comment: 'This was my first group project as a developer. My main role on the team was constructing the site\'s front end, particularly the pages for individual cities, posts, and forms. I enjoyed testing out React\'s flexibility, while also learning about considerations for coding in a group effort.'
    }

    const starlight = {
        title: 'Starlight',
        image: './css/images/starlight.png',
        technology: 'MERN Stack',
        liveSite: 'https://starlight-movie-app.herokuapp.com',
        gitHub: 'https://github.com/elfein/project-three-movie-app',
        comment: 'This movie-selection helper was made while thinking of groups of friends like mine that have fewer chances to get together and relax; any chance to save time in a fun way helps. Attempting more robust animations and transitions on this project was fun, and it was also satisfying to incorporate 3rd party APIs to create a more robust, usable app.'
    }

    const abundance = {
        title: 'Abundance',
        image: './css/images/abundance.png',
        technology: 'NoSQL (MongoDB, Mongoose)',
        liveSite: 'https://rocky-lowlands-30178.herokuapp.com',
        gitHub: 'https://github.com/elfein/project-two-abundance',
        comment: 'Abundance App was made to help record and organize a user\'s collections and souvenirs. This project reinforced the importance of organized user stories, which were vital for keeping me sane while constructing CRUD functionality.'
    }

    const hangman = {
        title: 'Hangman',
        image: './css/images/hangman.png',
        technology: 'jQuery DOM Manipulation',
        liveSite: 'https://lucid-fermi-271bb8.netlify.com',
        gitHub: 'https://github.com/elfein/project-one-hangman',
        comment: 'For my first bootcamp project, I created a typical hangman game while substituting in lighter imagery. I had a fun time creating an interactive site and figuring out how to tackle certain conditional states.'
    }

    const projects = [vagabond, starlight, abundance, hangman]

    const constructProject = (project) => {
        return (
            `<div class="project">
            <div class="info">
            <h3>${project.title}</h3>
            <div class='image' style="background-image: url(${project.image})"></div>
            <p>
            <a target="_blank" href=${project.liveSite}>Live Site</a> and 
            <a target="_blank" href=${project.gitHub}>GitHub</a>
            </p>
            </div>
            <div class="details">
            <div class="technology">
            <h6>Main technology:</h6>
            <p>${project.technology}</p>
            </div>
            <h6>Comments:</h6>
            <p>${project.comment}</p>
            </div>
            </div>`
        )
    }

    const projectHTML = projects.map((project) => {
        return constructProject(project)
    })

    $('.gallery').html(projectHTML)
})