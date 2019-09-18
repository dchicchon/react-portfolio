import React, { Component } from 'react';

class Contact extends Component {
    state = {
        visible: false
    }

    componentDidMount() {
        this.setState({
            visible: true
        })
    }
    render() {
        return (
            <div className='resume-container'>
                <div className={this.state.visible ? 'FadeIn resume z-depth-3 hoverable' : 'resume z-depth-2 hoverable'}>
                    <div className='row center focus'>
                        <h4>Daniel Chicchon</h4>
                        <p> <a className='resumeLink' href='mailto:danielchicchon@gmail.com? subject=subject text'>danielchicchon@gmail.com</a> (209)-915-8668</p>
                        <p> <a className='resumeLink' href='https://www.linkedin.com/in/dchicchon/'>LinkedIn</a> <a className='resumeLink' href='https://github.com/dchicchon'>Github</a> <a className='resumeLink' href='https://wakatime.com/@aa6da2ff-a49a-4380-9d4a-19cd87da5d3a' target='_blank'>Wakatime</a> </p>
                    </div>
                    <div className='row focus'>
                        <h5>Skills</h5>
                        <div className='col s5 m4'>
                            {/* Add Links to tech */}
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className='col s5 m4'>
                            <ul>
                                <li>Express.js</li>
                                <li>Git</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                        <div className='col s5 m4'>
                            <ul>
                                <li>Node.js</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row focus'>
                        <h5>Education</h5>
                        {/* Add Links to Institutions */}
                        <br />
                        <div className='row'>
                            <p><i>Full Stack Web Development</i><span style={{ float: 'right' }}>May 2019 - August 2019</span></p>
                            <p><strong>UC Berkeley Extension</strong></p>
                        </div>

                        <br />
                        <div className='row'>
                            <p><i>B.S. Ecology and Evolutionary Biology</i><span style={{ float: 'right' }}>September 2013 - September 2017</span></p>
                            <p><strong>UC Santa Cruz</strong></p>
                        </div>
                    </div>
                    <div className='row'>
                        <h5 className='focus'>Work Experience</h5>
                        {/* Add Links to Employers */}
                        <br />
                        <div className='row focus'>
                            <p><i>Teaching Assistant</i> <span style={{ float: 'right' }}>August 2019 - Present</span></p>
                            <p><strong>UC Berkeley Extension, San Francisco CA</strong></p>
                            <ul>
                                <li>● Led classroom lectures on software engineering</li>
                                <li>● Create course material to teach Full Stack students new technologies</li>
                                <li>● Conduct code reviews for students’ web development coursework</li>
                                {/* <li>● Build data visualization applications to view students progress post-graduation </li> */}
                            </ul>

                        </div>
                        <div className='row focus'>
                            <p><i>Tutor</i> <span style={{ float: 'right' }}>January 2019 - May 2019</span></p>
                            <p><strong>Sylvan Learning Center, San Francisco CA</strong></p>
                            <ul>
                                <li>● Fostered an open friendly environment for education</li>
                                <li>● Prepared daily learning plans</li>
                                <li>● Wrote session reports for each student to review how the lesson went</li>
                            </ul>
                        </div>
                        <div className='row focus'>
                            <p><i>Sales Associate</i> <span style={{ float: 'right' }}>August 2018 - April 2019</span></p>
                            <p><strong>California Academy of Sciences, San Francisco CA</strong></p>
                            <ul>
                                <li>● Communicate effectively with the Guest Experience team</li>
                                <li>● Engage with guests about museum operations and facilities </li>
                                <li>● Take part in training to engender quality engagements with guests</li>

                            </ul>
                        </div>

                    </div>
                    {/* <div className='row focus'>
                    <h5>Additional Links</h5>
                    <br />
                    <a href='#mysite'>Personal Website</a>
                    
                </div> */}

                </div>
            </div>
        )
    }
}

export default Contact;