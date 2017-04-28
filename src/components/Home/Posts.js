import React, {Component} from 'react';
import { reduxForm, Field  } from 'redux-form';
import Comments from './Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, addInfoToPost } from '../../actions';

// import {TextField} from 'redux-form-material-ui'

function mapStateToProps ({ userData, posts, form }) {
 return {
  userData,
  posts,
  form
 }
}

class PostForm extends Component {
    render() {
     const { userData, addPost, form } = this.props;
        return (
         <form>
           <div>
             <label htmlFor="post">Add Post</label><br/>
             <Field  name="post" component="input" type="text"/>
           </div>
           <button type="submit" onClick={(e) => {e.preventDefault(); addPost(userData, form)}}>Submit</button>
         </form>
        )
    }
}


export default connect(mapStateToProps, { addPost })(reduxForm({
 form: 'PostForm',
})(PostForm))
