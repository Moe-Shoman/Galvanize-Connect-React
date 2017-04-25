import React, {Component} from 'react';
import semantic from 'semantic-ui-react';
import './profile.css';
import Skill from '../Skills/skills_list_item';

export default class Profile extends Component {

    render() {
      return (
      <div>
        <div className="userPro">
          <h1>Ivonne Terrero</h1>

            <img className="ui circular image imgPro" src="/images/wireframe/square-image.png"></img>
        </div>

        <div>
          <h2>Project Title</h2>
          <p>Here we will find the description of the projects that the users will enter into our database</p>
        </div>
        <div>
          <Skill />
        </div>
      </div>
      )
    }
}
