import React, {Component} from 'react';
import { fetchSkills } from '../../actions';
// import Skill from './skills_list_item';
import {connect} from 'react-redux';
import firebase from 'firebase';
// import './skill.css';

const mapStateToProps = ({ skills, userData }) => {
  return {
    skills,
    userData
  }
}


class SkillsList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    firebase.database().ref(`users/${this.props.userData.name}/skills`).once("value", (snapshot) => {
      // console.log('snap');
      return this.props.fetchSkills(snapshot.val());
    })
  }

  renderSkills = (skills) => {
    if (skills) {
      return skills.map((skill, i)=>{
        return (
          <div key={i}>
            <div>
              {skill}
            </div>
          </div>
        )
      })
    }
  }
  render(){
    const { skills } = this.props
    return(
      <div>
        <p>hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
        <div>
          {this.renderSkills(skills)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {fetchSkills})(SkillsList);
