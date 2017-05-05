import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';
import firebase from 'firebase';
import AddSkillsForm from '../Skills/skills_form';
import AddCohort from './add_cohort';
import SocialLinks from './add_social';
import ListOfSocialLinks from './social_list';

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
        <div className="userPro">
          <h1>{renderUserName(this.props.userData)}</h1>

            <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
        </div>
        <div>
          {/* <SkillsList /> */}
          <div>
          <AddProjectForm />
          </div>
          <div>
          <AddSkillsForm />
          </div>
          <div>
          {/* <ProjectsList /> */}
          </div>
          <div>
          <AddCohort />
          </div>
          <div>
          <SocialLinks />
          </div>
          <div>
          <ListOfSocialLinks />
          </div>
        </div>
      </div>
    );
    }
}

export default connect(mapStateToProps)(Profile);
