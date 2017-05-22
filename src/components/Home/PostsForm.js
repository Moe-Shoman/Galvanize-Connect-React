import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, TextArea} from 'semantic-ui-react';
import {addPost} from '../../actions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    updateInput = (event) => {
        this.setState({
         input: event.target.value
        })
    }
    render() {
        const {userData, addPost} = this.props;
        return (
            <Form id='postForm'>
                <label htmlFor="post">
                    <h3>
                        Add Post
                    </h3>
                </label>
                <input  name="post" onChange={this.updateInput} value={this.state.input} type="text"/>
                <Button type="submit" onClick={(e) => {
                    e.preventDefault();
                    addPost(userData, this.state.input)
                    this.state.input = '';
                }}>Submit</Button>
            </Form>
        )
    }
}

export default connect(({ userData, posts }) => ({ userData, posts }), { addPost })(PostForm)
