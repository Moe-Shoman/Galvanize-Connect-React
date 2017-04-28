import React from 'react';
import Skill from './skills_list_item';
import {connect} from 'react-redux';
import './skill.css';

const mapStateToProps = ({ skills }) => {
  return {
    skills
  }
}

const SkillsList = ({ skills }) => {
    const allSkills = skills.map((e, i)=>{
      return (
        <Skill name={e} key={i}/>
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
