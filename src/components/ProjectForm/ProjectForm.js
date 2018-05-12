import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const mapStateToProps = state => ({
    state
});

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        project_title: '',
        description: '',
        person_id: this.props.state.user.userInfo.id,
    };
  }

  newMethod = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
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
                <div style={{ justifyContent: 'space-around', display: 'flex'}}>
                    <TextField
                        type="text"
                        label="Project Title"
                        name="project_title"
                        value={this.state.project_title}
                        onChange={this.handleChangeFor('project_title')}
                    />
                </div>
                <div style={{ justifyContent: 'space-around', display: 'flex'}}>
                    <TextField
                        type="text"
                        label="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChangeFor('description')}
                    />
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

export default connect(mapStateToProps)(ProjectForm);
