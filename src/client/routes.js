import About from './pages/about.react';
import App from './app/app.react';
import Home from './pages/home.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import Projects from './pages/projects.react';
import Contact from './pages/contact.react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Projects} name="projects" />
    <Route handler={Contact} name="contact" />
    <Route handler={About} name="about" />
  </Route>
);
