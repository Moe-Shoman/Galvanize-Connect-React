import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import {addComment} from '../../actions';
import './home.css'

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  updateComment = (event) => {
    this.setState({
      input: event.target.value
    })
  }
    render() {
     const { userData, addComment, postKey, postIndex } = this.props;
        return (
         <Form id='commentForm'>
             <Input placeholder="Add Reply" name="comment" onChange={this.updateComment} value={this.state.input} type="text"/>
             <br></br>
             <br></br>
           <Button color='blue' className="submit" type="submit" onClick={(e) => {
            e.preventDefault();
            addComment(userData, this.state.input, postKey, postIndex)
            this.setState({input: ''})
            }}>Submit</Button>
         </Form>
        )
    }
}

export default connect(({ userData }) => ({ userData }), { addComment })(Comments);
