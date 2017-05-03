import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addMessage } from '../../actions'
import { Redirect} from 'react-router-dom';
import Jobs from './Jobs';
import firebase from 'firebase'
import Feed from './Feed';


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
   console.log('snapshot is ---------', snapshot.val());
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
   console.log('this.state before', this.state);
      firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
 }

 render() {
  const currentMessage = this.state.messages.map((message, i) => {
   return (
    <div>
     <li key={message.id}>{message.text}</li>
    </div>
   )
  })
  return (

   <div>
     {currentMessage}
    <br/>

    <Feed/>
    <Jobs />
   </div>
  )
 }
}

export default Home;
