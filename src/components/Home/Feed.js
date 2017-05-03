import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions';
import PostsForm from './PostsForm'
import Comments from './Comments'

import firebase from 'firebase';

function mapStateToProps({posts}) {
    return {posts}
}
class Feed extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        firebase.database().ref('feed/posts').once("value", (snapshot) => {
            return this.props.fetchPosts(snapshot.val());
        })
    }
    renderComments = (commentObject) => {
        if (commentObject) {
            // console.log('maybe the array of comments', Object.values(commentObject));
            const comments = Object.values(commentObject);
            return comments.map((comment) => {
              console.log('comment in mapping vals', comment);
                return (
                    <div>
                      <p>{comment.comment}</p>
                      <p>{comment.name}</p>
                      {/* <img src={comment.photo} alt=""/> */}
                    </div>
                )
            })
            // const { comment, name, photo } = Object.values(commentObject)[0];
            // return(
            //   <div>
            //     <div>{name}</div>
            //     <div>{comment}</div>
            //   </div>
            // )
        }
    }
    render() {
        const Posts = this.props.posts.map((post, ind) => {
            return (
                <div key={post.postKey}>
                    <li key={post.ind}>{post.name}</li>
                    <img src={post.photo} alt=""/>
                    <li>{post.post}</li>
                    {this.renderComments(post.comments)}
                    <div><Comments postKey={post.postKey} postIndex={ind}/></div>
                </div>
            )
        })
        return (
            <div>
                <PostsForm/> {Posts}
            </div>
        )
    }
}
export default connect(mapStateToProps, {fetchPosts})(Feed);
