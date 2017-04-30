import React, { Component } from 'react';
import { reduxForm, Field  } from 'redux-form';
import './projectform.css';
// import {Field, Form, Group, Button, Input, TextArea} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { addProject } from '../../actions';
import { connect } from 'react-redux';





function mapStateToProps({ userData, projects, form}){
  return {
    userData,
    projects,
    form
  }
}

class AddProjectForm extends Component {
  render() {
   const { userData, addProject, form } = this.props;
      return (
       <form className="theForm ui form">
         <div>
           <div calssName="field">
              <label htmlFor="projectName">Project Name</label>
              <Field className="proName" name="projectName" component="input" type="text"/>
              </div>
            <div>
              <label htmlFor="description">Project Description</label>
              <Field className="proDesc" name="description" component="input" type="text"/>
            </div>
          </div>
         <button className="ui button" type="submit" onClick={(e) => {e.preventDefault(); addProject(userData, form)}}>Submit</button>
       </form>
      )
  }
}




export default connect(mapStateToProps, { addProject })(reduxForm({
  form: 'AddProjectForm',
})(AddProjectForm))
