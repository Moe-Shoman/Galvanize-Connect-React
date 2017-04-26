import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ReplyToPost extends Component {
 constructor(props) {
  super(props);
  this.state = {
   reply: '',
  }
 }
 updateReply= (e) =>  {
  console.log(e.target.value)

 }
 render() {
 return (
  <Modal
    trigger={<Button>Reply</Button>}
    header='Post Reply'
    content={<input/>}
    value={this.state.reply}
    actions={[
      { key: 'no', content: 'No', color: 'red', triggerClose: true },
      { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
    ]}
    onChange={this.updateReply}
  />
 )
}
}
export default ReplyToPost
