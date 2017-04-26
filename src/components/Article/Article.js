import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

// class Article extends Component {
//
//  logLink = (e) => {
//   e.preventDefault();
//   console.log('it worked?', e.target);
//  }
//
//  render() {
//   return (
//    <div>
//     <input onSubmit={this.logLink} type="text" placeholder="Post Link" />
//     <button>Click</button>
//    </div>
//   )
//  }
// }
//
// export default Article;


class Article extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}


export default Article;
