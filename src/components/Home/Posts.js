import React, {Component} from 'react';
import Comments from './Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, addInfoToPost } from '../../actions';
import { Button, Form } from 'semantic-ui-react';
function mapStateToProps ({ userData, posts, form }) {
 return {
  userData,
  posts,
 }
}

class PostForm extends Component {
    render() {
     const { userData, addPost } = this.props;
        return (
         <Form>
           <Form.Field>
             <label htmlFor="post">Add Post</label>
             <input name="post" component="input" type="text"/>
           </Form.Field>
           <Button type="submit" onClick={(e) => {e.preventDefault(); addPost(userData, form)}}>Submit</Button>
         </Form>
        )
    }
}


export default connect(mapStateToProps, { addPost })(reduxForm({
 form: 'PostForm',
})(PostForm))
