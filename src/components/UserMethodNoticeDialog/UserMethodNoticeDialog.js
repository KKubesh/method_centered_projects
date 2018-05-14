import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog, { DialogTitle, DialogContentText } from 'material-ui/Dialog';
import { Queue } from '@material-ui/icons';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const mapStateToProps = state => ({
    state,
});

class UserMethodNotice extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the methodsList from the API
        this.props.dispatch({
            type: 'GET_PROJECT'
        })
    }
    // dialog status established
    state = {
        open: false,
        bookmarkItem: {
            project_id: null,
            method_id: null,
        }
    };
    // dialog status change
    handleOpen = () => {
        this.setState({open: true});        
    };
    // dialog status change
    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = name => event => {
        this.setState({
            bookmarkItem: {
                [name]: event.target.value,
                method_id: this.props.methodItem.id
            }
        });
        console.log(this.props.methodItem.id);
        console.log(this.state.bookmarkItem.project_id);        
    };

    bookMark = () => {
        this.props.dispatch({
            type: 'POST_BOOKMARK',
            payload: this.state.bookmarkItem
        })
        this.props.handleAddMethod();
        this.handleClose();
    }

    render() {
        let projects = this.props.state.project
        return (
            <div style={{minWidth: '30px'}}>
                <IconButton onClick={this.handleOpen} style={{margin: '20px'}}>
                    <Queue />
                </IconButton> 
                {/* dialog appears when open is true */}
                <Dialog open={this.state.open} onClose={this.handleClose} className="signIn" >
                    <DialogTitle>Adding a Method</DialogTitle>
                    <DialogContentText style={{ justifyContent: 'center', padding: '30px', maxWidth: '300px' }}>
                        You selected to add the method <strong>{this.props.methodItem.title}</strong>. Please select a project.
                        <TextField
                            style={{  display: 'flex' }}
                            id="select-project"
                            select
                            label="Select existing project"
                            value={this.state.bookmarkItem.project_id}
                            onChange={this.handleChange('project_id')}
                            SelectProps={{
                                native: true
                            }}
                            margin="normal"
                            >
                            <option>
                                
                            </option>
                            {projects.map(option => (
                                <option key={option.id} value={option.id}>
                                {option.project_title}
                                </option>
                            ))}
                        </TextField>
                        <div style={{height: '80px'}}>
                        </div>                                
                        <div style={{  display: 'flex', justifyContent: 'center'}}>
                            <Button 
                                onClick={this.bookMark}
                                variant="raised"
                                color="primary"
                                style={{margin: '10px'}}
                            >
                                Add Method
                            </Button>
                        </div>
                    </DialogContentText >
                </Dialog>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserMethodNotice);