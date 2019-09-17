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
            <div className={this.state.visible ? 'FadeIn row' : 'row'}>
                <div className='col m6 center'>
                    <img onMouseEnter={this.mouseOn} onMouseLeave={this.mouseOff} src={this.state.currentImg} alt='profile' width='460rem' />
                </div>
                <div className='col m6'>
                    <p>Hello! Welcome to my page. As you may already know, my name is Danny. I am an aspiring Full Stack Web Developer that is currently based in the San Francisco Bay Area</p>
                </div>
            </div>
        )
    }
}

export default About;