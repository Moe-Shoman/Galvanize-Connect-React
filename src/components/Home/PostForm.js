// import React, {Component} from 'react';
// import {reduxForm, Field  } from 'redux-form';
//
// function mapDispatchToProps (dispatch) {
//  return bindActionCreators({addPost}, dispatch)
// }
//
// class PostForm extends Component {
//     render() {
//      console.log('this.props in Posts', this.props);
//      const {handleSubmit} = this.props;
//         return (
//          <form onSubmit={handleSubmit(this.props.addPost(this.props))}>
//            <div>
//              <label htmlFor="post">Add Post</label>
//              <Field  name="post" component="input" type="text"/>
//            </div>
//            <button type="submit">Submit</button>
//          </form>
//         )
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//  form: 'PostForm',
// })(PostForm))
