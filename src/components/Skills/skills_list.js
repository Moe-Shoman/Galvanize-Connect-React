import React from 'react';
import Skill from './skills_list_item';


const SkillsList = (props) => {

  //  const projectsList = [1, 2, 3, 4, 5];
  // const projectItems = props.projectsList.map((project)=> {
  //   return <Project/>
  // });


  return (
    <ul className="col-md-4 list-group">
      <Skill/>
    </ul>
  )
}

export default SkillsList;
