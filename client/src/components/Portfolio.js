import React, { Component } from 'react';

// Logo Images
import travelerLogo from '../assets/travelerLogo.png';
import planitLogo from '../assets/planitLogo.png';
import spaceLogo from '../assets/spaceLogo.png';
import psychicLogo from '../assets/psychicLogo.png';
import zooLogo from '../assets/zooLogo.png';
import bestLogo from '../assets/bestLogo.png';
import oceanLogo from '../assets/oceanLogo.png';
// import candyLogo from '../assets/candyLogo.png';
import gittrackLogo from '../assets/gittrackLogo.png';

class Portfolio extends Component {
    state = {
        visible: false,
        projects: [
            { name: 'GitTrack', tech: 'React.js, MySQL, Victory.js, Passport.js', logo: gittrackLogo, photoAuthor: '', description: 'A commit tracking site for instructors to keep track of student progress.', additionalInfo: 'To test the site, use the instructor login credentials. Email: danielchicchon@gmail.com, Password: daniel', siteLink: 'http://www.gittrack.ml/', repoLink: 'https://github.com/dchicchon/GitTrack' },
            { name: 'Traveler', tech: 'Heroku, React.js, MySQL, Node.js, Express.js, Passport.js, AWS S3', logo: travelerLogo, photoAuthor: '', description: 'A social media platform for those who travel and those who would like help planning their future trips.', additionalInfo: '', siteLink: 'https://traveler3.herokuapp.com/', repoLink: 'https://github.com/dchicchon/traveler3' },
            { name: 'Solar System Trivia', tech: 'JQuery, HMTL5, CSS, MongoDB', logo: spaceLogo, photoAuthor: '', description: 'Test your knowledge of the Solar System through trivia!', additionalInfo: '', siteLink: 'https://spacetrivia.herokuapp.com/', repoLink: 'https://github.com/dchicchon/TriviaGame' },
            { name: 'Psychic', tech: 'JavaScript, HTML5, CSS, Animate.css, Bootstrap', logo: psychicLogo, photoAuthor: '', description: 'Try to guess the letter!', additionalInfo: '', siteLink: 'https://dchicchon.github.io/psychic/', repoLink: 'https://github.com/dchicchon/psychic' },
            { name: 'OceanTastic', tech: 'Giphy API, JQuery, HTML5, CSS ', logo: oceanLogo, photoAuthor: '', description: 'Check out gifs of your favorite sea creatures!', additionalInfo: '', siteLink: 'https://dchicchon.github.io/GifTastic/', repoLink: 'https://github.com/dchicchon/GifTastic' },
            { name: 'Zoo', tech: 'Heroku, MongoDB, Materialize.css, React.js', logo: zooLogo, photoAuthor: '', description: 'This app keeps track of animals in the MongoDB Zoo!', additionalInfo: '', siteLink: 'https://zoo-mongo.herokuapp.com/', repoLink: 'https://github.com/dchicchon/mongo' },
            { name: 'Best Gigs', tech: 'MySQL, Express Handlebars, Express.js, JQuery, Tensorflow.js', logo: bestLogo, photoAuthor: 'Photo by why kei on Unsplash', description: 'Best Gigs helps you find the best paying gig based on your location and using the machine learning software.', additionalInfo: '', siteLink: 'https://infinite-chamber-90128.herokuapp.com/', repoLink: 'https://github.com/dchicchon/Project-2?organization=dchicchon&organization=dchicchon' },
            { name: 'Plan-It', tech: 'Firebase, Yelp API, Bart API, Open Weather API ', logo: planitLogo, photoAuthor: '', description: 'A planner app that lets you plan your day with Bart Schedule, Local Eateries, Real-Time Weather Data, and personalized notes.', additionalInfo: '', siteLink: 'https://esarnb.github.io/Plan-It/', repoLink: 'https://github.com/dchicchon/Plan-It' },
            // { name: 'Candy Collect', tech: 'JQuery, HTML5, CSS', logo: candyLogo, photoAuthor: '', description: 'Collect the Candy in the Baskets and try not to spill it!', siteLink: 'https://dchicchon.github.io/Candy-Collect/', repoLink: 'https://github.com/dchicchon/Candy-Collect' },

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
                                    <img className='responsive-img activator' src={project.logo} alt='project' />
                                </div>
                                <div className='card-reveal'>
                                    <span className='card-title'>{project.name} <i className="material-icons right">close</i></span>
                                    <p>{project.description}</p>
                                    <br />
                                    <p>Technologies: <span>{project.tech}</span> </p>
                                    <br />
                                    <p>Links:
                                        <a className='projectLink' href={project.siteLink} rel='noopener noreferrer' target='_blank'> Site </a>
                                        <a className='projectLink' href={project.repoLink} rel='noopener noreferrer' target='_blank'>Repository</a>
                                    </p>


                                    {/* Add Photo Authors from Unsplash */}
                                    {/* <p className='author'>{project.photoAuthor}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='footer center'>
                    <p className='navLinks'>Copyright © Daniel Chicchon 2019</p>
                </div>

            </div>
        )
    }
}

export default Portfolio;