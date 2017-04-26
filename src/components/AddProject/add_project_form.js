import React, { Component } from 'react';
import {reduxForm  } from 'redux-form';
import './projectform.css';
import {Field, Form, Group, Button, Input, TextArea} from 'semantic-ui-react';

class AddProject  extends Component {
  render(){
   return (

     <Form className="form">
        <Form.Group widths='equal'>
          <Form.Field className="profName"control={Input} label='Project Name' placeholder='Project Name' />
        </Form.Group>

        {/* <Form.Group inline> */}
        {/* </Form.Group> */}
        <Form.Field className="proDesc"control={TextArea} label='About' placeholder='Tell us more about your project...' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      // <form>
      //   <div>
      //     <label htmlFor="projectName">Project Name</label>
      //     <Field name="projectName" component="input" type="text"/>
      //   </div>
      //   <div>
      //     <label htmlFor="description">Project Description</label>
      //     <Field className="proDesc" name="description" component="input" type="text"/>
      //   </div>
      //   <button type="submit">Submit</button>
      // </form>
    );
  }
}
AddProject = reduxForm({
  form: 'project' // a unique name for this form
})(AddProject);



export default AddProject;
