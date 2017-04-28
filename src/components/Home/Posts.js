import React, {Component} from 'react';
import {reduxForm, Field  } from 'redux-form';
import Comments from './Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addPost} from '../../actions';

// import {TextField} from 'redux-form-material-ui'
function postFire(...args) {
 console.log('Fire Bruh', args);
}
function mapStateToProps ({ GoogleAuth, posts, form }) {
 return {
  GoogleAuth,
  posts,
  form
 }
}

function mapDispatchToProps (dispatch) {
 return bindActionCreators({ addPost }, dispatch)
}

class PostForm extends Component {
    render() {
     const { GoogleAuth, addPost, handleSubmit, form } = this.props;
        return (
         <form>
           <div>
             <label htmlFor="post">Add Post</label>
             <Field  name="post" component="input" type="text"/>
           </div>
           <button type="submit" onClick={(e) => {e.preventDefault(); addPost(GoogleAuth, form)}}>Submit</button>
         </form>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
 form: 'PostForm',
})(PostForm))
