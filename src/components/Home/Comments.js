import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import {addComment} from '../../actions';

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
             <label htmlFor="comment">
              <h4>Comment</h4>
             </label>
             <input  name="comment" onChange={this.updateComment} value={this.state.input} type="text"/>
           <Button type="submit" onClick={(e) => {
            e.preventDefault();
            addComment(userData, this.state.input, postKey, postIndex)
            this.state.input = '';
            }}>Submit</Button>
         </Form>
        )
    }
}

export default connect(({ userData }) => ({ userData }), { addComment })(Comments);
