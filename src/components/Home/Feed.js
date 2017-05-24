import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Feed, Grid, Button} from 'semantic-ui-react';
import {fetchPosts} from '../../actions';
import {editPost} from '../../actions';
import PostsForm from './PostsForm'
import Comments from './Comments'
import firebase from 'firebase';

class Feeds extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    firebase.database().ref('feed/posts').once("value", (snapshot) => {
        return this.props.fetchPosts(snapshot.val());
    })
  }
  renderComments = (commentObject) => {
     if (commentObject) {
       const comments = Object.values(commentObject);
       return comments.map((comment, i) => {
           return (
               <Grid.Row className='commentRow'>
                   <Grid.Column width={6} verticalAlign='middle'>
                       <Card fluid key={i + comment.comment} className='comments'>
                           <Feed.Event>
                               <Feed.Label image={comment.photo}/>
                               <Feed.Content>
                                   <Feed.Date content={comment.time}/>
                                   <Feed.Summary>
                                       <Card.Header>{comment.name}</Card.Header>
                                       {comment.comment}
                                   </Feed.Summary>
                               </Feed.Content>
                           </Feed.Event>
                       </Card>
                   </Grid.Column>
               </Grid.Row>
           )
       })
     }
  }
    render() {
        const Posts = this.props.posts.map((post, ind) => {
            return (
                <Feed >
                    <div key={post.postKey + ind}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Card fluid className='posts'>
                                        <Card.Content>
                                            <Feed.Event>
                                                <Feed.Label image={post.photo}/>
                                                <Feed.Content>
                                                    <Feed.Date content={post.date}/>
                                                    <Feed.Summary>
                                                        <Card.Header>{post.name}</Card.Header>
                                                        {post.post}
                                                    </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>
                                        </Card.Content>
                                    </Card>
                                    <Button type="submit" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.editPost(post)
                                    }}>Delete</Button>
                                </Grid.Column>
                            </Grid.Row>
                            {this.renderComments(post.comments)}
                            <Comments postKey={post.postKey} postIndex={ind}/> {/* </Segment.Group> */}
                        </Grid>
                    </div>
                </Feed>
            )
        })
        return (
            <div>
                <PostsForm/> {Posts}
            </div>
        )
    }
}

export default connect(({posts}) => ({posts}), {fetchPosts, editPost})(Feeds);
