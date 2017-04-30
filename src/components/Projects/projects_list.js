import React, {Component} from 'react';

import { connect } from 'react-redux';



function mapStateToProps({ projects }){
  return {
    projects
  }
}

const _renderProject = (projects) => {
    if(projects.length === 0){
      return (
        <div>
          <button>Add a Project</button>
        </div>
      )
    }
   return projects.map((project) => {
     console.log("PROJECT+++++", project);
    return (
            <div key="project.projectName">

                <div>{project.projectName}</div>

                <div>{project.description}</div>
            </div>
            )
  })
}


class ProjectsList extends Component {

  render () {
    const {projects} = this.props;
    return (
      <div>
        {_renderProject(projects)}
      </div>
    );
  }
}


// const ProjectsList = ({projects}) => {
// console.log("here is the ProjectsList", projects);
//
//   if(projects.length === 0){
//     return (
//       <div>
//         <button>Add a Project</button>
//       </div>
//     )
//   }
//   return (
//     <div className="theproject">{_renderProject}</div>
//   )
// }
  //   return projects.map((projectitem) => {
  //     console.log("projectItem", projectitem.projectName);
  //   return (
  //     <div key={projectitem.projectName}>
  //       <div>
  //       {projectitem.projectName}
  //       </div>
  //       <div>
  //       {projectitem.description}
  //       </div>
  //     </div>
  //   )
  // })
// }


  // render(){
  //   console.log('the props in side project lis', this.props)
  //   return (
  //     <ul className="col-md-4 list-group">
  //       <Project/>
  //     </ul>
  //   )
  //
  // }
// }
  // const projectItems = props.projects.map((project)=> {
  //   return <Project/>
  // });
// function mapStateToProps({ projects }){
//   console.log(projects);
//   return {
//     projects
//   }
// }

export default connect(mapStateToProps)(ProjectsList);
