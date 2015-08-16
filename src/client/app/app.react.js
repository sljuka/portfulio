import '../../../assets/css/app.sass';
import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Header from './header.react';
import Footer from './footer.react';
import React from 'react';
import {appState} from '../state';
import {measureRender} from '../console';
import {msg} from '../intl/store';
import {RouteHandler} from 'react-router';

// All stores must be imported here.
import '../auth/store';
import '../examples/store';
import '../todos/store';
import '../users/store';
import '../menu/store';
import '../tooltipPopup/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState() {
    const viewer = appState.get().getIn(['users', 'viewer']);
    return appState.get().merge({
      isLoggedIn: !!viewer,
      viewer: viewer
    }).toObject();
  }

  // Why componentWillMount instead of componentDidMount.
  // https://github.com/este/este/issues/274
  componentWillMount() {
    if (!process.env.IS_BROWSER) return;
    appState.on('change', () => {
      measureRender(done => this.setState(this.getState(), done));
    });
  }

  render() {
    return (
      <DocumentTitle title={msg('home.title')}>
        <div className='container'>
          <div className='small-logo'>
            <span className='light-text'>David Sljukic - </span>
            <span className='mediterano'>portfolio</span>
          </div>
          <div className='big-border'>
            <Header menu={this.state.menu} />
            <RouteHandler {...this.state} />
            <Footer {...this.state} />
          </div>
        </div>
      </DocumentTitle>
    );
  }

}

export default App;
