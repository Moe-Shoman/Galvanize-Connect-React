import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { StyleRoot } from 'radium';
import Coverflow from 'react-coverflow'
import { Card } from 'semantic-ui-react';
import { fetchProjects } from '../../../actions';
import EditProject from './EditProject';
import AddProjectForm from './AddProjectForm'
import firebase from 'firebase';
import './project.css';


class ProjectsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.database().ref(`projects/${this.props.userData.uid}`).on('value', snapshot => {
     return this.props.fetchProjects(snapshot.val())
   })
  }

  renderProject = (userData, projects) => {

    return projects.map((project, i) => (
    <Card fluid={true} key={i}>
    <Card.Content>
      <Card.Header>
       {project.projectName}
      </Card.Header>
      <Card.Header>
       {project.description}
      </Card.Header>
      <EditProject project={project} user={userData} />
    </Card.Content>
   </Card>

    ));

  };

  render() {
    const { userData, projects} = this.props;
    return(
        <StyleRoot>
         <Coverflow
               displayQuantityOfSide={1}
               navigation
               enableScroll
               enableHeading={false}
               clickable={false}
               active={1}
               media={{
                 '@media (max-width: 800px)': {
                   width: '600px',
                   height: '300px',
                 },
                 '@media (min-width: 800px)': {
                   width: '1000px',
                   height: '300px',
                 },
               }}
             >
          {this.renderProject(userData, projects)}
         </Coverflow>
        </StyleRoot>
    );
  }
}

export default connect(({ userData, projects }) => ({ userData, projects }), ({ fetchProjects }))(ProjectsList);
