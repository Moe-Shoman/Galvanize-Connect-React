import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions';
import PostsForm from './PostsForm'
import Comments from './Comments'
import firebase from 'firebase';
import CardExampleContentBlock from './exampleCard';
import { Card, Feed } from 'semantic-ui-react';
function mapStateToProps({posts}) {
    return {posts}
}
class Feeds extends Component {
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
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        Recent Activity
                      </Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Label image={post.photo} />
                          <Feed.Content>
                            <Feed.Date content={post.date} />
                            <Feed.Summary>
                              <Card.Header>{post.name}</Card.Header>
                              {post.post}
                            </Feed.Summary>
                          </Feed.Content>
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                    {this.renderComments(post.comments)}
                    <div><Comments postKey={post.postKey} postIndex={ind}/></div>
                </div>
            )
        })
        return (
            <div>
                <PostsForm/>
                {Posts}
                {/* {this.example()} */}
                {/* <CardExampleContentBlock /> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchPosts})(Feeds);
