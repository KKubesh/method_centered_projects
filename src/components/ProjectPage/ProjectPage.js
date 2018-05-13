import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import ProjectMethods from '../ProjectMethods/ProjectMethods';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { ArrowBack, ChevronLeft } from '@material-ui/icons';
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

  backButton = () => {
    this.props.history.push('/user');
  }

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
          {/* <IconButton 
              style={{margin: '20px'}}
              color="secondary"
          >
              <ArrowBack />
          </IconButton> */}
          <Grid item xs={12}>
            <h1 id="welcome">
              {this.props.project.project_title}
            </h1>
          </Grid>
          <Grid item xs={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
          </Grid>
          <div>
            <Button
              style={{ display: 'flex', justifyContent: 'center', margin: '10px'}}                
              variant="raised"
              color="primary"
              onClick={this.backButton}
              >
              <ChevronLeft />
            </Button>
          </div>
          <Grid item xs={12}>
              <h2>Methods</h2>
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