import React, {Component} from 'react';
import { fetchProjects } from '../../actions'
import { connect } from 'react-redux';
import firebase from 'firebase';
import './project.css';


function mapStateToProps({ projects, userData }){
  return {
    projects,
    userData
  }
}

const _renderProject = (projects) => {
    if(projects.length === 0){
      return (
        <div>
          <button>Add a Project</button>
        </div>
      )
    }
   return projects.map((project, i) => {
    return (
            <div className="projectItem" key={i}>

                <div className="projectTitle">Title: {project.projectName}</div>

                <div className="projectDes">Description: {project.description}</div>
            </div>
            )
  })
}


class ProjectsList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.userData.name, 'in mount profile');
    firebase.database().ref(`users/${this.props.userData.name}/projects`).once("value", (snapshot) => {
      return this.props.fetchProjects(snapshot.val());
    })
  }

  render () {
    const {projects} = this.props;
    return (
      <div >
        {_renderProject(projects)}
      </div>
    );
  }
}


export default connect(mapStateToProps, { fetchProjects })(ProjectsList);
