import React, {Component} from 'react';
import { reduxForm, Field  } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Comments extends Component {
    render() {
        return (
            <div>
                <p>I'm a Comment</p>
            </div>
        )
    }
}


export default Comments;
