import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';


const mapStateToProps = state => ({
    state
});

class MethodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        statements: '',
        description: '',
	    time_amount: '',
	    diffculty: '',
	    need: '',
	    participants: '',
        steps: '',
        image: '',
    };
  }

  componentDidMount() {
    
  }

  newMethod = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_METHOD', payload: this.state })
  }

  handleChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.newMethod}>
                <div>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChangeFor('title')}
                    />
                    Time:
                    <input
                        type="text"
                        name="time_amount"
                        value={this.state.time_amount}
                        onChange={this.handleChangeFor('time_amount')}
                    />
                    Diffculty:
                    <input
                        type="text"
                        name="diffculty"
                        value={this.state.diffculty}
                        onChange={this.handleChangeFor('diffculty')}
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
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChangeFor('description')}
                    />
                </div>
                <div>
                    Items needed:
                    <input
                        type="text"
                        name="need"
                        value={this.state.need}
                        onChange={this.handleChangeFor('need')}
                    />
                </div>
                <div>
                    Participants:
                    <input
                        type="text"
                        name="participants"
                        value={this.state.participants}
                        onChange={this.handleChangeFor('participants')}
                    />
                </div>
                <div>
                    Steps:
                    <input
                        type="text"
                        name="steps"
                        value={this.state.steps}
                        onChange={this.handleChangeFor('steps')}
                    />
                </div>
                <div>
                    Icon:
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChangeFor('image')}
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        name="submit"
                        label="Submit"
                    >
                        Submit
                    </Button>
                    <Button
                        label="Cancel"
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

export default connect(mapStateToProps)(MethodForm);
