import React from 'react';
import Project from './project';


const ProjectsList = (props) => {
  // const projectItems = props.projects.map((project)=> {
  //   return <Project/>
  // });


  return (
    <ul className="col-md-4 list-group">
      <Project/>
    </ul>
  )
}

export default ProjectsList;
