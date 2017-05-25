import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Chip from 'material-ui/Chip';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from './Projects/ProjectsList';
// import SkillsList from '../Skills/skills_list';
import AddProjectForm from './AddProject/AddProjectForm';
// import firebase from 'firebase';
import AddSkillsForm from './Skills/SkillsForm';
import AddCohort from './AddCohort';
import SocialLinks from './AddSocial';
import ListOfSocialLinks from './SocialLinks';
import { Sidebar } from 'semantic-ui-react';


class Profile extends Component {
  render() {
    return (
      <Sidebar.Pusher>
        <div>
          <div className="userPro">
            <div className="userName">
              {/* <h2>{renderUserName(this.props.userData)}</h2> */}
              <p className="userName">{this.props.userData.name}</p>
              <img className="ui circular image imgPro" src={this.props.userData.photo} />
            </div>
            <div className="cohortStyle">
              <h3 className="numStyle">{this.props.userData.cohort}</h3>
              <div>
                <AddCohort />
              </div>
            </div>
            <div>
              <ListOfSocialLinks />
              <div>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div>
            {/* <SkillsList /> */}

            <div>
              <AddSkillsForm />
            </div>
            {/* <div> */}
            <ProjectsList />
            {/* </div> */}
            <div className="projectButton">
              <AddProjectForm />
            </div>
          </div>
        </div>
      </Sidebar.Pusher>
    );
  }
}

export default connect(({ userData }) => ({ userData }))(Profile);
// reference
// export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
