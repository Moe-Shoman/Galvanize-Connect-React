import React, { Component } from 'react';
import './projectform.css';
// import {Field, Form, Group, Button, Input, TextArea} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { addProject } from '../../actions';
import { connect } from 'react-redux';





function mapStateToProps({ userData, projects}){
  return {
    userData,
    projects
  }
}

class AddProjectForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        projectName: '',
        description: ''
    }
  }
  updateInput = (event) => {
    const value = event.target.value;
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }
  render() {
   const { userData, addProject, form } = this.props;
      return (
       <form className="theForm ui form">
         <div>
           <div calssName="field">
              <label htmlFor="projectName">Project Name</label>
              <input className="proName" name="projectName" onChange={this.updateInput} type="text"/>
              </div>
            <div>
              <label htmlFor="description">Project Description</label>
              <input className="proDesc" name="description" onChange={this.updateInput} type="text"/>
            </div>
          </div>
         <button className="ui button" type="submit" onClick={(e) => {e.preventDefault(); addProject( userData, {projectName: this.state.projectName, description: this.state.description})}}>Submit</button>
       </form>
      )
  }
}




export default connect(mapStateToProps, { addProject })(AddProjectForm)
