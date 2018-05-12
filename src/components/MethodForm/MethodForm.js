import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

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

  newMethod = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_METHOD', payload: this.state })
    this.props.handleClose();
  }

  showDemo = () => {
      this.setState({
        title: 'Story board',
        statements: 'A quick, low-resolution prototype, a Storyboard can help you visualize your concept from start to finish.',
        description: 'You don’t need to be a great artist to create a great Storyboard. By visually plotting out elements of your product or service, you can learn a lot about your idea. Not only will this method help you refine what your idea is, it can also reveal who will use it, where, and how. Like all prototypes, the idea here is to make something really rough as a way to help you think the idea through. It’s amazing what putting pen to paper can reveal.',
	    time_amount: '660 Minutes',
	    diffculty: 'Easy',
	    need: 'Pens, paper',
	    participants: 'Design team',
        steps: '1. With a partner, determine what it is you want to prototype. You don’t have to Storyboard the entire offering. Use it to test even one component of your idea, like an interaction, or how a customer finds your product. 2. Spend no more than 30-45 minutes drawing how your ideas work. Use a series of comic book-style frames for your drawing. This will help you spotlight key moments and build a short narrative. 3. Don’t get hung up on your drawing abilities. It’s more important that it helps you fully think through your concept than create something that looks beautiful. 4. Once you’re done, act out the Storyboard to your team for feedback.',
        image: 'http://design-kit-staging.s3.amazonaws.com/procedures/transparent_cover_images/000/000/035/index/0_Storyboard_575x575.png?1409105886'
      })
  }

  handleChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
        <Grid container item xs={12} style={{ padding: '30px', display:'flex'}}>
            <p style={{textAlign: 'right', color: 'white'}} onClick={this.showDemo}>*</p>
        
            <form style={{minWidth: '500px'}} onSubmit={this.newMethod}>
                <Grid item sx={12} style={{display: 'flex'}}>
                    <Grid style={{padding: '10px'}}>
                        <div>
                            <TextField
                                type="text"
                                name="title"
                                label="Title"
                                defaultValue={this.state.title}
                                value={this.state.title}
                                onChange={this.handleChangeFor('title')}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="time_amount"
                                label="Time"
                                defaultValue={this.state.time_amount}                        
                                value={this.state.time_amount}
                                onChange={this.handleChangeFor('time_amount')}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="diffculty"
                                label="Diffculty"
                                defaultValue={this.state.diffculty}
                                value={this.state.diffculty}
                                onChange={this.handleChangeFor('diffculty')}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="image"
                                label="Icon Link"
                                defaultValue={this.state.image}
                                value={this.state.image}
                                onChange={this.handleChangeFor('image')}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{padding: '10px'}}>
                        <div>
                            <TextField
                                type="text"
                                name="need"
                                defaultValue={this.state.need}
                                label="Materials Needed"
                                value={this.state.need}
                                onChange={this.handleChangeFor('need')}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="participants"
                                label="Participants"
                                defaultValue={this.state.participants}
                                value={this.state.participants}
                                onChange={this.handleChangeFor('participants')}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="steps"
                                label="Steps"
                                defaultValue={this.state.steps}
                                value={this.state.steps}
                                onChange={this.handleChangeFor('steps')}
                            />
                        </div>
                    </Grid>
                </Grid>
                <div style={{padding: '10px'}}>
                    <TextField
                        type="text"
                        name="statements"
                        fullWidth={true}
                        rows="4"
                        label="Statement"
                        defaultValue={this.state.statements}
                        value={this.state.statements}
                        onChange={this.handleChangeFor('statements')}
                    />
                </div>
                <div style={{padding: '10px'}}>
                    <TextField
                        type="text"
                        name="description"
                        fullWidth={true}
                        rows="8"                        
                        label="Description"
                        defaultValue={this.state.description}
                        value={this.state.description}
                        onChange={this.handleChangeFor('description')}
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
        </Grid>
    );
  }
}

export default connect(mapStateToProps)(MethodForm);
