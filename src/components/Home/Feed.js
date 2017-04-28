import React, {Component} from 'react';
import PostsForm from './PostsForm';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import firebase from 'firebase';

function mapStateToProps({ posts }){
  return {
    posts
  }
}
class Feed extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    firebase.database().ref('feed/posts').once("value", (snapshot) => {
      return this.props.fetchPosts(snapshot.val());
    })
  }
    render() {
      const Posts = this.props.posts.map((post, ind) => {
       return (
        <div>
         <li key={post.ind}>{post.name}</li>
         <img src={post.photo} alt=""/>
         <li>{post.post}</li>
        </div>
       )
      })
        return (
            <div>
              <PostsForm />
              {Posts}
            </div>
        )
    }
}
export default connect(mapStateToProps, { fetchPosts })(Feed);
