import React from 'react';
import { connect } from 'react-redux';
import { clearAuthToken } from '../local-storage';
import { clearAuth } from '../actions/auth';

import './header.css';

export class Header extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => 
          {
            this.logOut();
          }
        }>Log out</button>
      );
    }
    return (
      <nav className="header-bar">
        <h1>Inventory Manager</h1>
        {logOutButton}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);