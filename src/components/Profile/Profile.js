import React, {Component} from 'react';
// import Chip from 'material-ui/Chip';
// import semantic from 'semantic-ui-react';
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
import { Sidebar, Grid } from 'semantic-ui-react';
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
          <Sidebar.Pusher>
              <div>
                <div className="userPro">
                  <div className="userName">
                  <h1>{renderUserName(this.props.userData)}</h1>
                    <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
                  </div>
                  <div className="cohortStyle">
                      <h3 className="numStyle">{this.props.userData.cohort}</h3>
                      <div>
                      <AddCohort />
                      </div>
                  </div>
                  <div>
                      <ListOfSocialLinks />
                      {/* <div>
                      <SocialLinks />
                      </div> */}
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

export default connect(mapStateToProps)(Profile);
