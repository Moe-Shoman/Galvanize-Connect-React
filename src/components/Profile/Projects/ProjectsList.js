import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Item } from 'semantic-ui-react';
// import firebase from 'firebase';
// import { fetchProjects } from '../../../actions';
import './project.css';


const renderProject = (projects) => {
  if (!projects) {
    return (
      <div>
        <button>Add a Project</button>
      </div>
    );
  }
  return projects.map((project, i) => (
    <div className="projectItem" key={i}>
      <div className="projectTitle"><h2 className="prohead">{project.projectName}</h2></div>
      <div className="projectDes"><p>{project.description}</p></div>
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
      <div className="allProjects">
        {renderProject(projects)}
      </div>
    );
  }
}

//NOTE: the projects are not being fetched in this component.
// export default connect(({ userData }) => ({ userData }), { fetchProjects })(ProjectsList);
export default connect(({ userData }) => ({ userData }))(ProjectsList);
