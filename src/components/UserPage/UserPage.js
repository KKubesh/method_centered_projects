import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import UserMethods from '../UserMethods/UserMethods';
import ProjectList from '../ProjectList/ProjectList';
import ProjectForm from '../ProjectForm/ProjectForm';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { CreateNewFolder } from '@material-ui/icons';
import Grid from 'material-ui/Grid';
import Dialog, { DialogTitle } from 'material-ui/Dialog';


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
};

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

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div style={styles.root}>
          <Grid xs={12}>
            <h1 id="welcome">
              Welcome, { this.props.user.userName }!
            </h1>
            <Button onClick={this.logout}>
              Log Out
            </Button>
          </Grid>
          <Grid item xs={12}>
            <h2>Projects
              <IconButton style={{margin: '20px'}}>
                <CreateNewFolder onClick={this.handleOpen} />
              </IconButton>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Create New Project</DialogTitle>
                <ProjectForm handleClose={this.handleClose}/>
              </Dialog> 
            </h2>
            <ProjectList />
          </Grid>
          <Grid xs={12}>
            <p>Long paragraph of explaination on how to use this stuff in the User's page.</p>
          </Grid>
          <Grid item xs={12}>
            List of methods
            <UserMethods />
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
export default connect(mapStateToProps)(UserPage);