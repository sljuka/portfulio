import Component from '../components/component.react'
import React from 'react'

export default class Projects extends Component {

  render() {
    return (
      <ul className='projects'>
        <li className='project'>
          <div className='row'>
          <div className='col-xs-9'>
            <h1>Bizflow</h1>
            <p>Bizflow is my master degree project. It's a business process management tool and is consisting of three projects:</p>
            <p><strong>Bizflow Library</strong> (Ruby gem), implements the process management business logic and a DSL for defining process models.</p>
            <p><strong>Bizflow API</strong> (Rails API), makes Bizflow business logic available online as a REST web service.</p>
            <p><strong>Bizflow Front</strong>, a React/Flux javascript client which implements the GUI and communicates with the API.</p>
          </div>

          <div className='col-xs-3'>
            <a className='sample-button button' href='http://sljuka.info/bizflow/' target='_blank'>Sample</a>
            <a className='gh-button button' href='https://github.com/sljuka/bizflow' target='_blank'>Github</a>
          </div>
          
          </div>
        </li>
      </ul>
    )
  }

}
