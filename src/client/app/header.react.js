import Component from '../components/component.react'
import React from 'react'
import {FormattedHTMLMessage} from 'react-intl'
import {Link} from 'react-router'
import {msg} from '../intl/store'
import {setMenuStyle, toggle} from '../menu/actions'

class Header extends Component {

  toggleMenu(e) {
    e.preventDefault()
    toggle()
  }

  handleResize() {
    const screenWidth = window.innerWidth || document.body.clientWidth

    console.log(`expanded: ${this.props.menu.get('expanded')}`)
    console.log(`compact: ${this.props.menu.get('compact')}`)

    setMenuStyle(screenWidth)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render() {

    const menuList =
      <ul className="clearfix">
        <li><Link to="home">{msg('header.home')}</Link></li>
        <li><Link to="projects">{msg('header.projects')}</Link></li>
        <li><Link to="contact">{msg('header.contact')}</Link></li>
        <li><a href="#">Design</a></li>
        <li><a href="#">Web 2.0</a></li>
        <li><a href="#">Tools</a></li> 
      </ul> 

    const expanded = this.props.menu.get('expanded')
    const compact = this.props.menu.get('compact')
    const displayMenuList = !compact || (compact && expanded)

    return (
      <header>
        <nav className="main-nav clearfix">
          {compact &&
            <a href="#" onClick={this.toggleMenu}>Menu</a>
          }
          {displayMenuList &&
            menuList
          }
        </nav>
      </header>
    );
  }

}

export default Header;
