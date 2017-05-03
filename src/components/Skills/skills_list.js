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
    console.log("IN MOUNT PROFILE", this.props.userData.name, 'bang bang', 'why IAM I NOT HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    firebase.database().ref(`users/${this.props.userData.name}/skills`).once("value", (snapshot) => {
      console.log('snap');
      return this.props.fetchSkills(snapshot.val());
    })
  }

  // renderSkill = (skills) => {
  //   console.log('skill in render function', skills);
  //   return skills.map((skill, i)=>{
  //     return (
  //       <div key={i}>
  //         <div>
  //           {skill}
  //         </div>
  //       </div>
  //     )
  //   })
  // }
  render(){
    const Skills = this.props.skills.map((skill, i) => {
     return (
      <div key={i}>
        <div>
          {skill}
        </div>
      </div>
     )
    })
    return(
      <div>
        <p>hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
        <div>
          {Skills}
        </div>
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
