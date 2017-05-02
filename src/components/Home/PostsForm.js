import React, {Component} from 'react';
// import { reduxForm, Field  } from 'redux-form';
import { connect } from 'react-redux';
import { addPost } from '../../actions';

// import {TextField} from 'redux-form-material-ui'
function mapStateToProps ({ userData, posts, form }) {
 return {
  userData,
  posts,
  form
 }
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
    render() {
     const { userData, addPost, form } = this.props;
        return (
         <form>
           <div>
             <label htmlFor="post">Add Post</label>
             <input  name="post" onChange={this.updateInput} value={this.state.input} type="text"/>
           </div>
           <button type="submit" onClick={(e) => {e.preventDefault(); addPost(userData, this.state.input)}}>Submit</button>
         </form>
        )
    }
}


export default connect(mapStateToProps, { addPost })(PostForm)
