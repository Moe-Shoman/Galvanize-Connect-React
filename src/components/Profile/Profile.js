import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';
// import firebase from 'firebase';
import AddSkillsForm from '../Skills/skills_form';
import AddCohort from './add_cohort';
import SocialLinks from './add_social';
import ListOfSocialLinks from './social_list';
import {Sidebar} from 'semantic-ui-react';

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
  <Sidebar.Pusher className="userPro">
        {/* <Segment basic> */}
      <div>
        <div className="userPro">
          <h1>{renderUserName(this.props.userData)}</h1>

            <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
        </div>
        <div>
          <SkillsList />
          <AddProjectForm />
          <AddSkillsForm />
          <ProjectsList />
          <AddCohort />
          <SocialLinks />
          <ListOfSocialLinks />
        </div>
      </div>
    {/* </Segment> */}
         </Sidebar.Pusher>
    );
    }
}

export default connect(mapStateToProps)(Profile);
