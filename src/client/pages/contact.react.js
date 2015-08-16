import Component from '../components/component.react'
import React from 'react'

export default class Contact extends Component {

  render() {
    return (
      <div className='contact-page'>
        <p className='signature mediterano'>David Šljukić</p>
        <p>email: <a className='mediterano' href='mailto:david.sljukic@gmail.com' target='_blank'>davidsljukic@gmail.com</a></p>
        <p>github: <a className='mediterano' href='https://github.com/sljuka' target='_blank'>https://github.com/sljuka</a></p>
        <p>skype: <span className='mediterano'>david.sljukic</span></p>
      </div>
    )
  }
}
