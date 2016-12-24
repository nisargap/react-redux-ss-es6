import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// new es6 babel transform-decorators-legacy allows you to do this
@connect((state) => {
  return { custom: state };
})
class Layout extends Component {

  _handleClick = (event) => {
    alert();
  }
  render() {
    let custom = this.props.custom;
    return (
        <html>
            <head>
                <title>{custom.title}</title>
                <link rel='stylesheet' href='/styles.css' />
            </head>
            <body>

                <h1>{custom.title}</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={this._handleClick}>Click Me</button>
                {this.props.children}
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                </ul>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(custom)
                }} />
                <script src='/bundle.js' />
            </body>
        </html>
    );
  }
}
export default Layout;
