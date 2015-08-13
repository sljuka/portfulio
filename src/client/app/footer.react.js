import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class Footer extends Component {

  render() {
    return (
      <footer>
        <div className='container'>
          <p>
            <FormattedHTMLMessage message={msg('app.madeByHtml')} />
          </p>
        </div>
      </footer>
    );
  }

}

export default Footer;
