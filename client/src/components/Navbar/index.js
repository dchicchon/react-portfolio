import React, { Component } from 'react';

import Splitting from 'splitting';


class Navbar extends Component {

    componentDidMount() {
        const target = document.querySelector(".splitting");
        const results = Splitting({ target: target, by: 'chars', key: null })
        console.log(results)
    }

    render() {
        return (
            <div className='row'>
                {this.props.links.map((link, i) => (
                    <h4
                        key={i}
                        className={`col s4 ${this.props.activeLink === link ? 'navLinksActive splitting' : 'navLinks'} linksFadeIn center-align`}
                        name={link}
                        onClick={(e) => this.props.onChange(e, link)}
                    >
                        {link}
                    </h4>
                ))}
            </div>
        )
    }
}

export default Navbar