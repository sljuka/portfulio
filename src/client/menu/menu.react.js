import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router'
import {msg} from '../intl/store'
import {setMenuStyle, toggle} from '../menu/actions'
import SmallLogo from '../components/smalllogo.react';

export default class Menu extends Component {

  toggleMenu(e) {
    e.preventDefault()
    toggle()
  }

  handleResize() {
    const screenWidth = window.innerWidth || document.body.clientWidth
    setMenuStyle(screenWidth)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {

    const menuList =
      <ul className='clearfix'>
        <li className='selected'><Link to='root'>{msg('header.home')}</Link></li>
        <li><Link to='about'>{msg('header.about')}</Link></li>
        <li><Link to='projects'>{msg('header.projects')}</Link></li>
        <li><Link to='contact'>{msg('header.contact')}</Link></li>
      </ul> 

    const expanded = this.props.menu.get('expanded')
    const compact = this.props.menu.get('compact')
    const displayMenuList = !compact || (compact && expanded)

    return (
      <nav className='main-nav clearfix'>
        {compact &&
          <a href='#' className='toggle-menu' onClick={this.toggleMenu}></a>
        }
        {compact &&
          <SmallLogo />
        }
        {displayMenuList &&
          menuList
        }
      </nav>
    );
  }

}
