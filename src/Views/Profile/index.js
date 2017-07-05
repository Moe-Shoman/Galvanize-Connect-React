import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Chip from 'material-ui/Chip';
// import semantic from 'semantic-ui-react';
import ProfileHeader from '../../components/Profile/Header/Header';
import '../../components/Profile/profile.css';
import ProjectsList from '../../components/Profile/Projects/ProjectsList';
import SkillsList from '../../components/Profile/Skills/SkillsList';
import AddProjectForm from '../../components/Profile/Projects/AddProjectForm';
// import firebase from 'firebase';
import AddSkillsForm from '../../components/Profile/Skills/SkillsForm';
// import AddCohort from '../../components/Profile/AddCohort';
import SocialLinks from '../../components/Profile/Social/AddSocial';
import ListOfSocialLinks from '../../components/Profile/Social/SocialLinks';
import { Sidebar } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <Grid columns={2} id="profile" stackable>
        <Grid.Row id="profileheader">
          <ProfileHeader />
        </Grid.Row>

        <Grid.Row id="skills_projects_coverflow" stackable>
          <div className="skills">
            <div className="skillslist">
              <SkillsList />
            </div>

            <div className="addskills">
              <AddSkillsForm />
            </div>

          </div>

          <div >
            <div>
              <ProjectsList />
            </div>

            <div className="projects">
              <AddProjectForm />
            </div>

          </div>
        </Grid.Row>
      </Grid>

    );
  }
}

export default connect(({ userData }) => ({ userData }))(Profile);
