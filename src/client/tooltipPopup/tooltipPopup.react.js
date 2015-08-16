import Component from '../components/component.react'
import React from 'react'
import {toggle} from './actions'
import {FormattedHTMLMessage} from 'react-intl';

export default class TooltipPopup extends Component {

  handleClick() {
    toggle(this.props.name)
  }

  render() {
    const className = `tooltip-circle tooltip-${this.props.name}`
    const popupClassName = `tooltip-popup tooltip-popup-${this.props.name}`
    
    const tooltip = (
      <span className={popupClassName}>
        <FormattedHTMLMessage message={this.props.text} />
      </span>
    )

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        {this.props.opened && tooltip}
      </div>
    )
  }

}
