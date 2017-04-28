import React, {Component} from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import firebase from 'firebase'
export default class Feed extends Component {
  componentDidMount(){
    firebase.database().ref('feed/posts').on("value", (snapshot) => {
      console.log('snapshot.value()', snapshot.val());
    })
  }
    render() {
        return (
            <div>
              <Posts />
            </div>
        )
    }
}
// export connect(mapStateToProps
// )(Feed);
