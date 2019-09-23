import React, { Component } from 'react';
import img1 from '../assets/danny1.jpg';
import img2 from '../assets/danny7.JPG';

class About extends Component {
    state = {
        visible: false,
        currentImg: img1,
        img1: img1,
        img2: img2
    }

    componentDidMount() {
        this.setState({
            visible: true
        })
    }

    mouseOn = () => {
        this.setState({
            currentImg: this.state.img2
        })
    }

    mouseOff = () => {
        this.setState({
            currentImg: this.state.img1
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.visible ? 'FadeIn row' : 'row'}>
                    <div className='col m6 center'>
                        <img className='responsive-img hoverable' onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOff} src={this.state.currentImg} alt='profile' />
                    </div>
                    <div className='col m6'>
                        <p>Welcome to my page! I am an aspiring Full Stack Web Developer that is currently based in the San Francisco Bay Area. Currently I am working at UC Berkeley Extension as a Teaching Assistant for Full Stack Web Development Course.  </p>
                        <br />
                        <p>In my free time, you can usually find me hiking around Lands End in the Outer Richmond or taking a nap at Ocean Beach.</p>
                    </div>
                </div>
                <div className={'picture'}>

                </div>
                <div className='footer center'>
                    <p className='navLinks'>Copyright © Daniel Chicchon 2019</p>
                </div>
            </div>
        )
    }
}

export default About;