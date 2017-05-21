import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../actions';
import { Button, Form } from 'semantic-ui-react';

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
         <Form>
             <label htmlFor="comment">Comment</label>
             <input  name="comment" onChange={this.updateComment} value={this.state.input} type="text"/>
           <Button type="submit" onClick={(e) => {e.preventDefault(); addComment(userData, this.state.input, postKey, postIndex);}}>Submit</Button>
           <Button>Edit</Button>
         </Form>
        )
    }
}

export default connect(({ userData }) => ({ userData }), { addComment })(Comments);
