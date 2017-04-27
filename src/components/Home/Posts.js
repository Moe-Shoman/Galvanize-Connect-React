import React, {Component} from 'react';
import Comments from './Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
export default class Posts extends Component {
    render() {
        return (
            <div>
              <h2>
                I'm a post
              </h2>
                <Comments/>
              </div>
              )
    }
}
