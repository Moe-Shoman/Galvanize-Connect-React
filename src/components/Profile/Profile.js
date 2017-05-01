import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';

//trying to linkt he button to the form.

import { Link } from 'react-router';
import SkillForm from '../Skills/skills_form';

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
      console.log(this.props.userData);
      return (
      <div>
        <div className="userPro">
          <h1>{renderUserName(this.props.userData)}</h1>

            <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
        </div>
        <div>
          {/* <ProjectsList /> */}
          <SkillForm />
          <SkillsList />
          {/* <AddProjectForm /> */}
          {/* <div className="text-sx-right">
            <Link to ="/skills_form" className="button">Add A Skill</Link> */}
              {/* <button onClick={}>Add a Skill</button> */}
          {/* </div> */}
        </div>
      </div>
    );
    }
}

export default connect(mapStateToProps)(Profile);
