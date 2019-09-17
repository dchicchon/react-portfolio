import React, { Component } from 'react';

// Logo Images
import travelerLogo from '../assets/travelerLogo.png';
import planitLogo from '../assets/planitLogo.png';
import spaceLogo from '../assets/spaceLogo.png';
import psychicLogo from '../assets/psychicLogo.png';
import zooLogo from '../assets/zooLogo.png';
import bestLogo from '../assets/bestLogo.png';
import oceanLogo from '../assets/oceanLogo.png';
import candyLogo from '../assets/candyLogo.png';

class Portfolio extends Component {
    state = {
        visible: false,
        projects: [
            { name: 'Traveler', tech: 'Heroku, React.js, MySQL, Node.js, Express.js, Passport.js, AWS S3', logo: travelerLogo, photoAuthor: '', description: 'A social media platform for those who travel and those who would like help planning their future trips.', siteLink: 'https://traveler3.herokuapp.com/', repoLink: 'https://github.com/dchicchon/traveler3' },
            { name: 'Plan-It', tech: 'Firebase, Yelp API, Bart API, Open Weather API ', logo: planitLogo, photoAuthor: '', description: 'A planner app that lets you plan your day with Bart Schedule, Local Eateries, Real-Time Weather Data, and personalized notes.', siteLink: 'https://esarnb.github.io/Plan-It/', repoLink: 'https://github.com/dchicchon/Plan-It' },
            { name: 'Best Gigs', tech: 'MySQL, Express Handlebars, Express.js, JQuery, Tensorflow.js', logo: bestLogo, photoAuthor: 'Photo by why kei on Unsplash', description: 'Best Gigs helps you find the best paying gig based on your location and using the machine learning software.', siteLink: 'https://infinite-chamber-90128.herokuapp.com/', repoLink: 'https://github.com/dchicchon/Project-2?organization=dchicchon&organization=dchicchon' },
            { name: 'Solar System Trivia', tech: 'JQuery, HMTL5, CSS', logo: spaceLogo, photoAuthor: '', description: 'Test your knowledge of the Solar System through trivia!', siteLink: 'https://dchicchon.github.io/TriviaGame/', repoLink: 'https://github.com/dchicchon/TriviaGame' },
            { name: 'Psychic', tech: 'JavaScript, HTML5, CSS, Animate.css, Bootstrap', logo: psychicLogo, photoAuthor: '', description: 'Try to guess the letter!', siteLink: 'https://dchicchon.github.io/psychic/', repoLink: 'https://github.com/dchicchon/psychic' },
            { name: 'Zoo', tech: 'Heroku, MongoDB, Materialize.css, React.js', logo: zooLogo, photoAuthor: '', description: 'This app keeps track of animals in the MongoDB Zoo!', siteLink: 'https://mongoboy.herokuapp.com/', repoLink: 'https://github.com/dchicchon/mongo' },
            { name: 'OceanTastic', tech: 'Giphy API, JQuery, HTML5, CSS ', logo: oceanLogo, photoAuthor: '', description: 'Check out gifs of your favorite sea creatures!', siteLink: 'https://dchicchon.github.io/GifTastic/', repoLink: 'https://github.com/dchicchon/GifTastic' },
            { name: 'Candy Collect', tech: 'JQuery, HTML5, CSS', logo: candyLogo, photoAuthor: '', description: 'Collect the Candy in the Baskets and try not to spill it!', siteLink: 'https://dchicchon.github.io/Candy-Collect/', repoLink: 'https://github.com/dchicchon/Candy-Collect' }
        ]
    }

    componentDidMount() {
        this.setState({
            visible: true
        })
    }

    render() {

        return (
            <div>
                {/* I want to have cards here for each of my projects */}
                <div className={this.state.visible ? 'FadeIn row' : 'row'}>

                    {this.state.projects.map((project, i) => (
                        <div className='col m6'
                            key={i}
                        >
                            <div className='card hoverable rise'>
                                <div className='card-image'>
                                    {/* <i className={project.logo}>Add Image Here</i> */}
                                    <img className='activator' src={project.logo} alt='project' height='275rem' />
                                </div>
                                {/* <div className='card-content'>
                                    <span className='card-title activator grey-text text-darken-4'>{project.name}</span>
                                </div> */}
                                <div className='card-reveal'>
                                    <span className='card-title'>{project.name} <i className="material-icons right">close</i></span>
                                    <p>{project.description}</p>
                                    <br />
                                    <p>Technologies: <span>{project.tech}</span> </p>
                                    <br />
                                    <p>Links: <a className='projectLink' href={project.siteLink} rel='noopener noreferrer' target='_blank'>Site</a> <a className='projectLink' href={project.repoLink} rel='noopener noreferrer' target='_blank'>Repository</a></p>
                                    
                                    
                                    {/* Add Photo Authors from Unsplash */}
                                    {/* <p className='author'>{project.photoAuthor}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Portfolio;