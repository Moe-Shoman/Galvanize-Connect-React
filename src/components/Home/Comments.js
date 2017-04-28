import React, {Component} from 'react';
// import { reduxForm, Field  } from 'redux-form';
import { connect } from 'react-redux';
import { addComment } from '../../actions';
// import { bindActionCreators } from 'redux';


function mapStateToProps ({ }) {
 return {

 }
}



class Comments extends Component {
    render() {
     const {addComment} = this.props;
        return (
            <div>
                <h1>this is a comment</h1>
                <button onClick={addComment}>click me </button>
            </div>
        )
    }
}



export default connect(mapStateToProps, {addComment})(Comments)
