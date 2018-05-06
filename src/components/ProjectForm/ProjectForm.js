import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';


const mapStateToProps = state => ({
    state
});

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        project_title: '',
        description: '',
        person_id: '',
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
                <div>
                    Project Title:
                    <input
                        type="text"
                        name="project_title"
                        value={this.state.project_title}
                        onChange={this.handleChangeFor('project_title')}
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
                    Project ID:
                    <input
                        type="text"
                        name="person_id"
                        value={this.state.person_id}
                        onChange={this.handleChangeFor('person_id')}
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

export default connect(mapStateToProps)(ProjectForm);
