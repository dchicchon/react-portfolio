import React, { Component } from 'react';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Resume';

// Packages
import Splitting from 'splitting';
import ReactGA from 'react-ga';

const trackingID = 'UA-148238028-1';
ReactGA.initialize(trackingID);

// Utils

class App extends Component {

  state = {
    page: 'Portfolio',
    waka: ''

  }

  componentDidMount() {
    const target = document.querySelector(".splitting");
    const results = Splitting({ target: target, by: 'chars', key: null })
    console.log(results)
  }

  changePage = (e, page) => {
    e.preventDefault()
    this.setState({ page })
  }

  render() {

    return (
      <div className='container'>
        <h1 className='center header splitting'>Daniel Chicchon</h1>
        {/* Add WakaTime API to check my progress */}
        <Navbar
          onChange={this.changePage}
          activeLink={this.state.page}
          links={["About", "Portfolio", "Resume"]}
        />
        {this.state.page === 'About' ? <About /> : ''}
        {this.state.page === 'Portfolio' ? <Portfolio /> : ''}
        {this.state.page === 'Resume' ? <Contact /> : ''}
      </div>
    )
  }

}

export default App;
