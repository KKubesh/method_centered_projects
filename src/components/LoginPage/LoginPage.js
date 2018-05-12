import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.user.userInfo && nextProps.user.userInfo.role == 'admin') {
      this.props.history.push('/admin');
    } else if (nextProps.user.userInfo && nextProps.user.userInfo.role == 'user') {
      this.props.history.push('/user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div style={{ padding: '30px'}}>
        <div style={{maxWidth: '200px'}}>
          { this.renderAlert() }
        </div>
        <form onSubmit={this.login}>
          <div style={{ justifyContent: 'space-around', display: 'flex'}}>
            <label htmlFor="username">
              <TextField
                type="text"
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div style={{ justifyContent: 'space-around', display: 'flex'}}>
            <label htmlFor="password">
              <TextField
                type="password"
                label="Password"                  
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div style={{height: '80px'}}>
          </div>
          <div style={{ justifyContent: 'center', display: 'flex'}}>
            <Button
              variant="raised"
              color="primary"
              type="submit"
              name="submit"
              label="Submit"
              style={{margin: '10px'}}
            >
              Sign In
            </Button>
            <Button
              variant="raised"
              color="secondary"
              label="Cancel"
              style={{margin: '10px'}}
              onClick={this.props.handleClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const routerLoginPage = withRouter(LoginPage)

export default connect(mapStateToProps)(routerLoginPage);
