import Component from '../../client/components/component.react';
import React from 'react';
import favicons from './favicons';

export default class Html extends Component {

  static propTypes = {
    bodyHtml: React.PropTypes.string.isRequired,
    isProduction: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired
  };

  render() {
    // Only for production. For dev, it's handled by webpack with livereload.
    const linkStyles = this.props.isProduction &&
      <link
        href={`/build/app.css?v=${this.props.version}`}
        rel="stylesheet"
      />;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
          <title>{this.props.title}</title>
          {/* this.renderLinks() */}
          {linkStyles}
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.bodyHtml}} />
      </html>
    );
  }

  renderLinks() {
    return favicons.map(this.renderLink, this)
  }

  renderLink(link, key) {
    const {isProduction, version} = this.props;
    // TODO: Why is not es7.objectRestSpread enabled?
    //const {href, ...linkProps} = link;
    const path = !isProduction ? '/assets/favicon/' : '/';

    return (
      <link
        key={key}
        href={`${path}${href}?v=${version}`}
        {...linkProps}
      />
    )
  }
}
