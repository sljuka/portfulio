import Component from '../components/component.react'
import React from 'react'
import {msg} from '../intl/store'
import Menu from '../menu/menu.react'

class Header extends Component {

  render() {

    return (
      <header>
        <Menu {...this.props} />
      </header>
    );
  }

}

export default Header;
