// import React, {Component} from 'react';
// import { reduxForm, Field  } from 'redux-form';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
//
// function mapStateToProps ({GoogleAuth, comments, form  }) {
//  return {
//   GoogleAuth,
//   posts,
//   form
//  }
// }
//
// function mapDispatchToProps (dispatch) {
//  return bindActionCreators({ addComment }, dispatch)
// }
//
//
// class Comments extends Component {
//     render() {
//         return (
//             <div>
//                 <p>I'm a Comment</p>
//             </div>
//         )
//     }
// }


// export default Comments;





// class PostForm extends Component {
//     render() {
//      const { GoogleAuth, addPost, handleSubmit, form } = this.props;
//         return (
//          <form>
//            <div>
//              <label htmlFor="post">Add Post</label>
//              <Field  name="post" component="input" type="text"/>
//            </div>
//            <button type="submit" onClick={(e) => {e.preventDefault(); addPost(GoogleAuth, form)}}>Submit</button>
//          </form>
//         )
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//  form: 'PostForm',
// })(PostForm))
