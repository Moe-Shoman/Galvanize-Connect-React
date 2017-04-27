import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';


function mapStateToProps({ GoogleAuth }){
  return {
    GoogleAuth
  }
}

const renderUserName = (GoogleAuth) => {
  console.log("In the renderUsername", GoogleAuth);
  return (
          <div>{GoogleAuth.userData.displayName}</div>
  )
}

class Profile extends Component {

    render() {
      return (
      <div>
        <div className="userPro">
          <h1>{renderUserName(this.props.GoogleAuth)}</h1>

            <img className="ui circular image imgPro" src={this.props.GoogleAuth.userData.photoURL}></img>
        </div>
        <div>
          <ProjectsList />
          <SkillsList />
          <AddProjectForm />
        </div>
      </div>
    );
    }
}

export default connect(mapStateToProps)(Profile);
