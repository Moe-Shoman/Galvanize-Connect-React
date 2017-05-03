import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../actions';

function mapStateToProps({userData}) {
    return { userData }
}


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  updateComment = (event) => {
    this.setState({
      input: event.target.value
    })
  }
    render() {
     const { userData, addComment, postKey, postIndex } = this.props;
        return (
         <form>
           <div>
             <label htmlFor="comment">Reply</label>
             <input  name="comment" onChange={this.updateComment} value={this.state.input} type="text"/>
           </div>
           <button type="submit" onClick={(e) => {e.preventDefault(); addComment(userData, this.state.input, postKey, postIndex);}}>Submit Reply</button>
         </form>
        )
    }
}


export default connect(mapStateToProps, { addComment })(Comments)
