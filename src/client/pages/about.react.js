import Component from '../components/component.react';
import React from 'react';

class Home extends Component {

  render() {
    return (
      <div className='row about-page'>
        <div className='col-md-4'>
          pic
        </div>
        <div className='col-md-8 about-page-text'>
          <h2>About me</h2>

          <p>
            I'm a graduated software developer from Novi Sad, Serbia.
            I enjoy designing, building and maintaining applications.
          </p>

          <p>
            It is very important to me personally and professionally to 
            constantly have an opportunity to learn new things, 
            to be active and creative. From my personal point of view 
            I am outgoing, ambitious, adventurous but patient and tolerant 
            person. I enjoy working both alone and as part of a team.
          </p>

          <h2 className='more-space'>Weapons of choice</h2>

          <p>
            <span className='mediterano'>Ruby</span> for web development backend 
            (<span className='mediterano'>Rails</span> and 
            <span className='mediterano'> Sinatra</span>), developing gems and DSLs.<br/>
            <span className='mediterano'>Javascript</span> client and server side, 
            I prefer the <span className='mediterano'>Flux/React</span> way.<br/>
            HTML, CSS including CSS frameworks like 
            <span className='mediterano'> Bootstrap</span> and 
            <span className='mediterano'> Foundation</span>.<br/>
            Extensive experience with <span className='mediterano'>Java</span>, 
            <span className='mediterano'> C#</span> and currently getting into Erlang.<br/>
            <span className='mediterano'>GIT</span> for source code configuration.<br/>
            Long time Ubuntu user and experienced with terminal and server configuration.
          </p>

          <h2 className='more-space'>My style</h2>

          <h3>Components, components, components...</h3>
          
          <p>
            When building large apps I tend to separate parts of app, 
            define their roles and unit test them separately from the app. 
            So there never should be a large app as a whole, 
            only a large number of communicating parts.
          </p>

          <h3>Measure twice, cut once</h3>
          
          <p>
            I tend to use test driven development for most big solutions, 
            these include unit tests, integration, acceptance tests. 
            It also gives me great pleasure to look at green dots. :)
          </p>
        </div>
      </div>
    );
  }

}

export default Home;
