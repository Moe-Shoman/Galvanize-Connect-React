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
            const comments = Object.values(commentObject);
            return comments.map((comment, i) => {
                return (
                    <div key={i + comment.comment}>
                      <p>{comment.comment}</p>
                      <p>{comment.name}</p>
                      {/* <img src={comment.photo} alt=""/> */}
                    </div>
                )
            })
        }
    }
    render() {
        const Posts = this.props.posts.map((post, ind) => {
            return (
                <div key={post.postKey + ind}>
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
