import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request('api/user/register', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      // making the request to the server to post the country
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
        <div style={{ padding: '30px', justifyContent: 'center', display: 'flex' }}>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <div>
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
          </div>
          <div style={{height: '80px'}}>
          </div>
          <div>
            <Button
              variant="raised"
              color="primary"
              type="submit"
              name="submit"
              label="Submit"
              onClick={this.props.handleClose}
              style={{margin: '10px'}}
            >
              Submit
            </Button>
            <Button
              variant="raised"
              color="secondary"
              label="Cancel"
              onClick={this.props.handleClose}
              style={{margin: '10px'}}              
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const routerRegisterPage = withRouter(RegisterPage);

export default routerRegisterPage;

