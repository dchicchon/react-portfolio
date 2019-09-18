import React, { Component } from 'react';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Resume';

// Packages
import Splitting from 'splitting';
import ReactGA from 'react-ga';

// Utils
import API from './Utils/API';



function initializeAnalytics() {
  ReactGA.initialize('UA-148238028-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

}

class App extends Component {

  state = {
    page: 'Portfolio',
    waka: ''

  }


  componentDidMount() {
    const target = document.querySelector(".splitting");
    const results = Splitting({ target: target, by: 'chars', key: null })
    console.log(results)
    API.getWaka();

  }

  changePage = (e, page) => {
    e.preventDefault()
    this.setState({ page })
  }

  render() {
    initializeAnalytics()
    return (
      <div>
        <div className='heading'>
          <h1 className='center header splitting col m12 s6'>Daniel Chicchon</h1>
          {/* Add WakaTime API to check my progress */}
          <div className='container'>
            <Navbar
              onChange={this.changePage}
              activeLink={this.state.page}
              links={["About", "Portfolio", "Resume"]}
            />
          </div>
        </div>
        <div id='main' className='container'>

          {this.state.page === 'About' ? <About /> : ''}
          {this.state.page === 'Portfolio' ? <Portfolio /> : ''}
          {this.state.page === 'Resume' ? <Contact /> : ''}
        </div>
        <div className='footer center'>
          <p className='navLinks'>Copyright © Daniel Chicchon 2019</p>
        </div>
      </div>
    )
  }

}

export default App;
