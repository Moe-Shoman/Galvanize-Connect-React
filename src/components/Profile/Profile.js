import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
// import Skill from '../Skills/skills_list_item';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';

export default class Profile extends Component {

    render() {
      return (
      <div>
        <div className="userPro">
          <h1>Ivonne Terrero</h1>

            <img className="ui circular image imgPro" src="/images/wireframe/square-image.png"></img>
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
