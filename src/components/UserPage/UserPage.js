import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import UserMethods from '../UserMethods/UserMethods';
import ProjectList from '../ProjectList/ProjectList';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div>
            <h1 id="welcome">
              Welcome, { this.props.user.userName }!
            </h1>
            <button onClick={this.logout}>
              Log Out
            </button>
          </div>
          <ProjectList />
          <div>
            <p>Long paragraph of explaination on how to use this stuff in the User's page.</p>
          </div>
          <div>
            List of methods
            <UserMethods />
          </div>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);