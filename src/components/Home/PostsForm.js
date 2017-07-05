import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { addPost } from '../../actions';
import './home.css'

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
        const { userData, addPost } = this.props;
        return (
            <Form id='postForm' >
                <br></br>
                <label htmlFor="post">
                    <h3>
                     Welcome To Galvanize Connect
                    </h3>
                </label>
                <br></br>

                <input placeholder="Add Post"  name="post" onChange={this.updateInput} value={this.state.input} type="text"/>
                <br></br>
                <br></br><Button color='blue' className="submit" type="submit"  onClick={(e) => {
                    e.preventDefault();
                    addPost(userData, this.state.input)
                    this.state.input = '';
                }}>Submit</Button>
            </Form>
        )
    }
}

export default connect(({ userData, posts }) => ({ userData, posts }), { addPost })(PostForm)
