import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ReplyToPost extends Component {
 constructor(props) {
  super(props);
  this.state = {
   reply: '',
  }
 }
 updateReply = (e) =>  {
  this.setState({
   reply: e.target.value
  })
 }
  submitReply = (e) => {
   e.preventDefault()
   // dispatch(this.state.reply)
   console.log(this.state.reply.value);
   let message = this.refs.message.value
   console.log(this.refs);
  }

 render() {
 return (
  <Modal
    trigger={<Button onSubmit={this.submitReply}>Reply</Button>}
    // header='Post Reply'
    content={<input type="text" placeholder="say something" ref="message"/>}
    value={this.state.reply}
    // actions={[
    //   { key: 'no', content: 'No', color: 'red', triggerClose: true },
    //   { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
    // ]}
    onSubmit={this.updateReply}
  />
 )
}
}
export default ReplyToPost
