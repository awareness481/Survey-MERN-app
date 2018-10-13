import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';
class Header extends Component {

  renderContect() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login with Google</a></li>
        );
      default:
        return [
          <li key="one"><Payments /></li>,
          <li key="two"><a href='/api/logout'>Log out</a></li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link 
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul className='right'>
            {this.renderContect()}
          </ul>
        </div>
      </nav>
    );
  }
};

function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);