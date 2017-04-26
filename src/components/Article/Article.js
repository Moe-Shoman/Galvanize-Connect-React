import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

class Article extends Component {
 constructor(props) {
  super(props)
 }
 render() {
  return (
   <div>
    <input onChange={this.updateMessage} type="text" placeholder="Message" />
    <br/>
    <button onClick={this.submitMessage}>What's Up?</button>
   </div>
  )
 }
}

export default Article;
