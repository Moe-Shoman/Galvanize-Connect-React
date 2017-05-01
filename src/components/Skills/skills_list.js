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

const renderSkill = (skills, i) => {
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

class SkillsList extends Component {
  constructor(props){
    super(props)
  }
  componetDidMount(){
    console.log("IN MOUNT PROFILE", this.props.UserData.name)
    firebase.database().ref(`users/${this.props.userData.name}/skills`).once("value", (snapshot) => {
      return this.props.fetchSkills(snapshot.val());
    })
  }

  render(){
    const {skills} = this.props;
    return(
      <div>
        {renderSkill(skills)}
      </div>
    );
  }
}

// = ({ skills }) => {
//     const allSkills = skills.map((e, i)=>{
//       return (
//         <Skill name={e} key={i}/>
//       )
//     })
//
//   return (
//     <ul className="col-md-4 list-group">
//       <div className="allskills">
//         {allSkills}
//       </div>
//     </ul>
//   )
// }

export default connect(mapStateToProps, {fetchSkills})(SkillsList);
