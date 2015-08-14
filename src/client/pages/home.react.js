import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class Home extends Component {

  render() {
    return (
      <DocumentTitle title={msg('home.title')}>
        <div className='home-page'>
          <h1 className='greetings-header'>Hello!</h1>
          <p className='greetings-paragraph'>
            I'm David. I'm an software engineer<br/>and I'm looking forward to working with you!
          </p>
        </div>
      </DocumentTitle>
    );
  }

}

export default Home;
