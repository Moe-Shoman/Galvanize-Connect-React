import React from 'react';
import Skill from './skills_list_item';
import {connect} from 'react-redux';
import './skill.css';

const mapStateToProps = ({  skills, userData }) => {
  return {
    skills,
    userData
  }
}

// const renderKills = (skills) => {
//   return
// }

const SkillsList = ({ skills }) => {
    const allSkills = skills.map((e, i)=>{
      return (
        <div>
         <Skill skillName={e} key={i}/>
        </div>
      )
    })

  return (
    <ul className="col-md-4 list-group">
      <div className="allskills">
        {allSkills}
      </div>
    </ul>
  )
}

export default connect(mapStateToProps)(SkillsList);
