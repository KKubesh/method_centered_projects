import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import UserMethods from '../UserMethods/UserMethods';

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
        <div>  
            <Grid item xs={2}>
                <IconButton 
                    style={{margin: '20px'}}
                    color="secondary"
                >
                    <ArrowBack />
                </IconButton>
            </Grid>
            <Grid item xs={10} style={styles.root}>
            <Grid item xs={10}>
                <h1 id="welcome">
                Project Name!
                </h1>
                
            </Grid>
            <Grid item xs={10}>
                <p>Long paragraph of explaination on Project and how to use page.</p>
            </Grid>
            <Grid item xs={10}>
                List of methods
                <UserMethods />
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
export default connect(mapStateToProps)(UserPage);