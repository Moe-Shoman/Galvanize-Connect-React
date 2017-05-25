// import React from 'react';
// import Comments from './Comments';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addPost, addInfoToPost } from '../../actions';
// import { Button, Form } from 'semantic-ui-react';
//
//
// const PostForm = ({userData, addPost}) => {
//     const {userData, addPost} = userData, addPost;
//     return (
//         <Form>
//             <Form.Field>
//                 <label htmlFor="post">Add Post</label>
//                 <input name="post" component="input" type="text"/>
//             </Form.Field>
//             <Button type="submit" onClick={(e) => {
//                 e.preventDefault();
//                 addPost(userData);
//             }}>Submit</Button>
//         </Form>
//     );
// };
// // const postForm = ({userData, addPost}) => (
// //     render() {
// //     const {userData, addPost} = this.props;
// //     return (
// //         <Form>
// //             <Form.Field>
// //                 <label htmlFor="post">Add Post</label>
// //                 <input name="post" component="input" type="text"/>
// //             </Form.Field>
// //             <Button type="submit" onClick={(e) => {
// //                 e.preventDefault();
// //                 addPost(userData, form);
// //             }}>Submit</Button>
// //         </Form>
// //     );
// // });
//
//
// export default connect(({ userData, posts }) => ({ userData, posts }) { addPost })(reduxForm({
//   form: 'PostForm',
// })(PostForm));
