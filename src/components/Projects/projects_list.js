import React, { Component } from 'react';
import { fetchProjects } from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';


function mapStateToProps({ projects, userData }) {
  return {
    projects,
    userData,
  };
}

const _renderProject = (projects) => {
  if (!projects) {
    return (
      <div>
        <button>Add a Project</button>
      </div>
    );
  }
  return projects.map((project, i) => (
    <div key={i}>

      <div>PROJECT TITLE: {project.projectName}</div>

      <div>DESCRIPTION: {project.description}</div>
    </div>
            ));
};


class ProjectsList extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // console.log(this.props.userData.name, 'in mount profile');
  //   firebase.database().ref(`users/${this.props.userData.name}/projects`).once('value', snapshot => this.props.fetchProjects(snapshot.val()));
  // }
  render() {
    const { projects } = this.props.userData;
    return (
      <div>
        {_renderProject(projects)}
      </div>
    );
  }
}


export default connect(mapStateToProps, { fetchProjects })(ProjectsList);
