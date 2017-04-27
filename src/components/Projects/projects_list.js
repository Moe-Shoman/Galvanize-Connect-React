import React, { Component } from 'react';
import Project from './project';
import { connect } from 'react-redux';

class ProjectsList extends Component {
  render(){
    console.log(this.props.projects, 'this.props in project list');
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
function mapStateToProps({ projects }){
  return {
    projects
  }
}
export default connect(mapStateToProps)(ProjectsList);
