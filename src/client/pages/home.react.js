import Component from '../components/component.react';
import React from 'react';

class Home extends Component {

  render() {
    return (
      <div className='home-page'>
        <h1 className='greetings-header'>Hello!</h1>
        <p className='greetings-paragraph'>
          I'm David. I'm an software engineer<br/>and I'm looking forward to working with you!
        </p>
      </div>
    );
  }

}

export default Home;
