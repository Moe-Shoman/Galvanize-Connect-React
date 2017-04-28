import React, { Component } from 'react';
import {reduxForm, Field  } from 'redux-form';
import './projectform.css';
// import {Field, Form, Group, Button, Input, TextArea} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { addProject } from '../../actions';
import { connect } from 'react-redux';



function mapDispatchToProps(dispatch) {
  return bindActionCreators( { addProject }, dispatch)
}



function mapStateToProps({ userData, projects, form}){
  return {
    userData,
    projects,
    form
  }
}

class AddProjectForm extends Component {
  // render(){
  //   const { userData, addProject, handleSubmit, form } = this.props;
  //  return (
  //
  //   //  <Form className="form" >
  //   //     <Form.Group widths='equal'>
  //   //       <Form.Field className="profName"control={Input} label='Project Name' placeholder='Project Name' />
  //   //     </Form.Group>
  //    //
  //   //     {/* <Form.Group inline> */}
  //   //     {/* </Form.Group> */}
  //   //     <Form.Field className="proDesc"control={TextArea} label='About' placeholder='Tell us more about your project...' />
  //   //     <Form.Field control={Button}>Submit</Form.Field>
  //   //   </Form>
  //     <form onSubmit={handleSubmit(this.props.addProject)}>
  //       <div>
  //         <label htmlFor="projectName">Project Name</label>
  //         <Field name="projectName" component="input" type="text"/>
  //       </div>
  //       <div>
  //         <label htmlFor="description">Project Description</label>
  //         <Field className="proDesc" name="description" component="input" type="text"/>
  //       </div>
  //       <button type="submit" onClick={(e) => {e.preventDefault(); addProject(userData, form)}}>Submit</button>
  //     </form>
  //   );
  // }

  render() {
   const { userData, addProject, form } = this.props;
      return (
       <form>
       <div>
         <div>
           {/* <label htmlFor="post">Add Project</label> */}
           {/* <Field  name="post" component="input" type="text"/> */}
                    <label htmlFor="projectName">Project Name</label>
                    <Field name="projectName" component="input" type="text"/>
                  </div>
                  <div>
                    <label htmlFor="description">Project Description</label>
                    <Field className="proDesc" name="description" component="input" type="text"/>
                  </div>
         </div>
         <button type="submit" onClick={(e) => {e.preventDefault(); addProject(userData, form)}}>Submit</button>
       </form>
      )
  }

}
AddProjectForm = reduxForm({
  form: 'project' // a unique name for this form
})(AddProjectForm);



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'AddProjectForm',
})(AddProjectForm))
