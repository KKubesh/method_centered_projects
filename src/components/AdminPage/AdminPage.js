import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import AdminMethods from '../AdminMethods/AdminMethods';
import NewMethodDialog from '../NewMethodDialog/NewMethodDialog';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'

const styles = {
  root: {       
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      justify: 'center',
      alignItems: 'center',
      maxWidth: '960px',
  }
}


const mapStateToProps = state => ({
  user: state.user,
});

class AdminPage extends Component {
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
        <div style={styles.root}>
          <Grid item xs={12}>
            <h1 id="welcome">
              Welcome, { this.props.user.userName }!
            </h1>
            <Button onClick={this.logout}>
              Log Out
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>Long paragraph of explaination on how to use this stuff in the admin's page.</p>
            <NewMethodDialog />
          </Grid>
          <Grid item xs={12}>
            List of methods
            <AdminMethods />
          </Grid>
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
export default connect(mapStateToProps)(AdminPage);