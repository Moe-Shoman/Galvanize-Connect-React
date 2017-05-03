import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';
import firebase from 'firebase';
import AddSkillsForm from '../Skills/skills_form';
import AddCohort from './add_cohort';

function mapStateToProps({ userData }){
  return {
    userData
  }
}

const renderUserName = (userData) => {
  console.log("In the renderUsername", userData);
  return (
          <div>{userData.name}</div>
  )
}

class Profile extends Component {
    render() {
      return (
      <div>
        {/* <div className="userPro">
          <h1>{renderUserName(this.props.userData)}</h1>

            <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
        </div> */}
        <div>
          <SkillsList />
<<<<<<< HEAD
          <AddProjectForm />
          <AddSkillsForm />
          <ProjectsList />
          <AddCohort />
=======
          {/* <AddProjectForm /> */}
          {/* <AddSkillsForm /> */}
          {/* <ProjectsList /> */}
>>>>>>> 004cace1e1543fd318313454bb60fe47f26b4a3f
        </div>
      </div>
    );
    }
}

export default connect(mapStateToProps)(Profile);
