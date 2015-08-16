import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';
import Tooltip from '../tooltipPopup/tooltipPopup.react'

export default class Footer extends Component {

  render() {
    return (
      <footer>
        
        <Tooltip
          name='skype'
          text='<strong>skypeID:</strong> david.sljukic'
          opened={this.props.tooltipPopup.get('skypeTooltipShowed')}
        />

        <Tooltip
          name='google'
          text='davidsljukic@gmail.com'
          opened={this.props.tooltipPopup.get('googleTooltipShowed')}
        />

        <a 
          className="tooltip-circle tooltip-github"
          href='https://github.com/sljuka'
          rel='author'
          target='_blank'
        >
        </a>
        
        {/*<a href='https://github.com/sljuka' target='_blank' rel='author' className='contact github-contact'></a>*/}
      </footer>
    );

  }
}

