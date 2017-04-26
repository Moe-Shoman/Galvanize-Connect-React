import React, { Component } from 'react';
import Project from './project';
import { connect } from 'react-redux';

class ProjectsList extends Component {
  render(){
    console.log('the props in side project lis', this.props)
    return (
      <ul className="col-md-4 list-group">
        <Project/>
      </ul>
    )

  }
}
  // const projectItems = props.projects.map((project)=> {
  //   return <Project/>
  // });
function mapStateToProps({ projectList }){

  return {
    projectList
  }
}

export default connect(mapStateToProps)(ProjectsList);
