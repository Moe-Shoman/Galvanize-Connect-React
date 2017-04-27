import React, { Component } from 'react';
import ReplyToPost from '../ReplyToPost/ReplyToPost'
import firebase from 'firebase'
import { bindActionCreators } from 'redux';
import { addMessage } from '../../actions'
import { Redirect} from 'react-router-dom';
import Feed from './Feed'
import Post from './Post'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMessage }, dispatch)
}
function mapStateToProps({userData, newMessage}) { //userData should be message data?
  return {
    newMessage
  }
}



class Home extends Component {
 constructor(props, context) {
  super(props, context)
  this.updateMessage = this.updateMessage.bind(this)
  this.submitMessage = this.submitMessage.bind(this)
   this.state = {
    message: '',
    messages: []
   }
 }

 componentDidMount() {
  firebase.database().ref('messages/').on('value', (snapshot) => {
   const currentMessages = snapshot.val()

   if(currentMessages != null) {
    this.setState({
     messages: currentMessages
    })
   }
  })
 }

 updateMessage(event) {
  this.setState({
   message: event.target.value
  })
 }

 submitMessage(event) {
   const nextMessage = {
    id: this.state.messages.length,
    text: this.state.message
   }
      firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
 }

 render() {
  const currentMessage = this.state.messages.map((message, i) => {
   return (
    <div>
     <li key={message.id}>{message.text}</li>
     <ReplyToPost/>
    </div>
   )
  })
  return (
   <div>
    <Feed/>
   <div>
     {currentMessage}
    <input onChange={this.updateMessage} type="text" placeholder="Message" />
    <br/>
    <button onClick={this.submitMessage}>Subtmit Post</button>
   </div>
   </div>
  )
 }
}

export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
