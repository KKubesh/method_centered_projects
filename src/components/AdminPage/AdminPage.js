import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import AdminMethods from '../AdminMethods/AdminMethods';
import NewMethodDialog from '../NewMethodDialog/NewMethodDialog';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'
// styling to keep content centered inside of the page and flex
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
    if (!this.props.user.isLoading && this.props.user.userInfo === null) {
      this.props.history.push('home');
    }
  }
  // log out moved to allow for user to log out on their page
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;
    //null and if statement to prevent unauthorized users from seeing content
    if (this.props.user.userInfo) {
      content = (
        <div style={styles.root}>
          <Grid item xs={12} >
            <h1 id="welcome_admin" style={{textAlign: 'left'}}>
              Welcome, Admin!
            </h1>
          </Grid>
          <div style={{padding: '40px'}}>
            <p>Here you can manage all the content on the website that the user can see. You can add a new method through the form below. Note you can also edit the content if any corrections need to be made. If you need to removed a method you can click the trash can icon. Admin only has these privileges and will need to adjust account settings to allow for additional content editors.</p>
          </div>
          <Grid item xs={12}>
              <div style={{ display: 'flex', padding: '20px', justifyContent: 'center'}}>
                <Button variant="raised" color="secondary" style={{margin: '10px', width: '130px'}} onClick={this.logout}>
                  Log Out
                </Button>
                <NewMethodDialog style={{margin: '10px'}} />
              </div>
            </Grid>
          <Grid item xs={12}>
            <h1>Methods</h1>
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