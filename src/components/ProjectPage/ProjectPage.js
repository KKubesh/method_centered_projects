import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import ProjectMethods from '../ProjectMethods/ProjectMethods';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { ArrowBack } from '@material-ui/icons';
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
  project: state.projectInfo
});

class ProjectPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ 
      type: 'PROJECT_INFO',
      payload: this.props.match.params
   })
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userInfo === null) {
      this.props.history.push('home');
    }
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
    console.log('this is project', this.props.match.params);
    
    if (this.props.user.userInfo) {
      content = (
        <div>
          <Grid item xs={12} style={styles.root}>
          <IconButton 
              style={{margin: '20px'}}
              color="secondary"
          >
              <ArrowBack />
          </IconButton>
          <Grid item xs={12}>
              <h1 id="welcome">
                {this.props.project.project_title}
              </h1>
              
          </Grid>
          <Grid item xs={12}>
              <p>Long paragraph of explaination on Project and how to use page.</p>
          </Grid>
          <Grid item xs={12}>
              List of methods
              <ProjectMethods currentProject={this.props.match.params} />
          </Grid>
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
export default connect(mapStateToProps)(ProjectPage);