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
        <span>ABOUT</span>
      </DocumentTitle>
    );
  }

}

export default Home;
