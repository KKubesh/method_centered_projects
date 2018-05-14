import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import UserMethods from '../UserMethods/UserMethods';
import ProjectList from '../ProjectList/ProjectList';
import ProjectForm from '../ProjectForm/ProjectForm';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { CreateNewFolder, ChevronLeft } from '@material-ui/icons';
import Grid from 'material-ui/Grid';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';


const styles = {
  root: {       
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      justify: 'center',
      alignItems: 'center',
      maxWidth: '960px',
  },
  snackBar: {
    background: '#ef7c2a',
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
    if (!this.props.user.isLoading && this.props.user.userInfo === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  state = {
    open: false,
    addProject: false,
    addMethod: false,
    vertical: null,
    horizontal: null,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleAddProject = message => () => {
    this.setState({ addProject: true, ...message });
  };

  handleAddMethod = message => () => {
    this.setState({ addMethod: true, ...message });
  };

  handleSnackClose = () => {
    this.setState({ addProject: false });
    this.setState({ addMethod: false });
  };

  render() {
    let content = null;
    const { vertical, horizontal, addProject, addMethod } = this.state;

    if (this.props.user.userInfo) {
      content = (
        <div style={styles.root}>
          <Grid item xs={12}>
            <h1 id="welcome_user" style={{textAlign: 'left'}}>
              Welcome, { this.props.user.userInfo.username }!
            </h1>
            <p style={{padding: '40px'}}>Below are simple tools to get started. From the landing page you can see all of the methods note that the add feature can be clicked from this page to add to your project. You may add a new project and description. If you click into the project, more information will be displayed on how to manage your content. Note that all projects will hold their own bookmarks independently of one another.</p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px'}}>
              <div>
              <Button
              style={{ display: 'flex', justifyContent: 'center', margin: '10px', height: '40px'}}
              onClick={this.logout}
              variant="raised"
              color="secondary"
              >
                Log Out
              </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h1>Projects
              <IconButton onClick={this.handleOpen} style={{margin: '20px'}}>
                <CreateNewFolder />
              </IconButton>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Create New Project</DialogTitle>
                <ProjectForm handleClose={this.handleClose} handleAddProject={this.handleAddProject({ vertical: 'bottom', horizontal: 'center' })}/>
              </Dialog> 
            </h1>
            <ProjectList />
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} >
            <h1 style={{padding: '50px', height: '0px'}}>Methods</h1>
            <UserMethods handleAddMethod={this.handleAddMethod({ vertical: 'bottom', horizontal: 'center' })}/>
          </Grid>
        </div>
      );
    }

    return (
      <div>
        { content }
        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={addProject}
            onClose={this.handleSnackClose}
            message={<span id="message-id">Project Added</span>}
          />
        </div>
        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={addMethod}
            onClose={this.handleSnackClose}
            message={<span id="message-id">Method Added</span>}
          />
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);