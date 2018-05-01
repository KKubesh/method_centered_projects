import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import FlatButton from 'material-ui/FlatButton';


const mapStateToProps = state => ({
    state
});

class MethodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      statements: '',
    };
  }

  componentDidMount() {
    
  }

  handleChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.login}>
                <div>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChangeFor('title')}
                    />
                </div>
                <div>
                    Statements:
                    <input
                        type="text"
                        name="statements"
                        value={this.state.statements}
                        onChange={this.handleChangeFor('statements')}
                    />
                </div>
                <div>
                    <FlatButton
                        type="submit"
                        name="submit"
                        label="Submit"
                        primary={true}
                    />
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onClick={this.props.handleClose}
                    />
                </div>
            </form>
        </div>
    );
  }
}

export default connect(mapStateToProps)(MethodForm);
