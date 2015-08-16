import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class NotFound extends Component {

  render() {
    return (
      <p className='not-available'>Page not available</p>
    );
  }

}

export default NotFound;
