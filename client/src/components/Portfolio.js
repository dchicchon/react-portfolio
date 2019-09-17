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
            { name: 'Traveler', logo: travelerLogo, photoAuthor: '', description: 'A social media platform for those who want to travel', siteLink: 'https://traveler3.herokuapp.com/', repoLink: 'https://github.com/dchicchon/traveler3' },
            { name: 'Plan-It', logo: planitLogo, photoAuthor: '', description: '', siteLink: 'https://esarnb.github.io/Plan-It/', repoLink: 'https://github.com/dchicchon/Plan-It' },
            { name: 'Best Gigs', logo: bestLogo, photoAuthor: 'Photo by why kei on Unsplash', description: '', siteLink: 'https://infinite-chamber-90128.herokuapp.com/', repoLink: 'https://github.com/dchicchon/Project-2?organization=dchicchon&organization=dchicchon' },
            { name: 'Solar System Trivia', logo: spaceLogo, photoAuthor: '', description: '', siteLink: 'https://dchicchon.github.io/TriviaGame/', repoLink: 'https://github.com/dchicchon/TriviaGame' },
            { name: 'Psychic', logo: psychicLogo, photoAuthor: '', description: '', siteLink: 'https://dchicchon.github.io/psychic/', repoLink: 'https://github.com/dchicchon/psychic' },
            { name: 'Zoo', logo: zooLogo, photoAuthor: '', description: '', siteLink: 'https://mongoboy.herokuapp.com/', repoLink: 'https://github.com/dchicchon/mongo' },
            { name: 'OceanTastic', logo: oceanLogo, photoAuthor: '', description: '', siteLink: 'https://dchicchon.github.io/GifTastic/', repoLink: 'https://github.com/dchicchon/GifTastic' },
            { name: 'Candy Collect', logo: candyLogo, photoAuthor: '', description: '', siteLink: 'https://dchicchon.github.io/Candy-Collect/', repoLink: 'https://github.com/dchicchon/Candy-Collect' }
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
                                    <p>Technologies: </p>
                                    <a className='projectLink' href={project.siteLink} rel='noopener noreferrer' target='_blank'>Site</a>
                                    <br />
                                    <a className='projectLink' href={project.repoLink} rel='noopener noreferrer' target='_blank'>Repository</a>
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