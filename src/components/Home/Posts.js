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
function mapStateToProps ({GoogleAuth, comments, postText, time}) {
 return {
  GoogleAuth,
  comments,
  postText,
  time
 }
}

function mapDispatchToProps (dispatch) {
 return bindActionCreators({addPost}, dispatch)
}

class PostForm extends Component {
    render() {
     const {GoogleAuth, comments, time} = this.props;
     console.log('this.props in Posts', this.props);
     const {handleSubmit} = this.props;
        return (
         <form onSubmit={handleSubmit(this.props.addPost)}>
           <div>
             <label htmlFor="post">Add Post</label>
             <Field  name="post" component="input" type="text"/>
           </div>
           <button type="submit" onClick={() => {postFire(GoogleAuth, comments, time)}}>Submit</button>
         </form>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
 form: 'PostForm',
})(PostForm))
