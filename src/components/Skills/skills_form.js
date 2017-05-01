import React, { Component } from 'react';
import { reduxForm, Field  } from 'redux-form';
import { bindActionCreators } from 'redux';
import { addSkill } from '../../actions';
import { connect } from 'react-redux';





function mapStateToProps({ userData, skills, form}){
  return {
    userData,
    skills,
    form
  }
}

class AddSkillsForm extends Component {
  render() {
   const { userData, addSkill, form } = this.props;
      return (
       <form className="theForm ui form">
         <div>
           <div calssName="field">
              <label htmlFor="skillName">Add Skill</label>
              <Field className="skillName" name="skillName" component="input" type="text"/>
              </div>
          </div>
         <button className="ui button" type="submit" onClick={(e) => {e.preventDefault(); addSkill(userData, form)}}>Submit</button>
       </form>
      )
  }
}




export default connect(mapStateToProps, { addSkill })(reduxForm({
  form: 'AddSkillsForm',
})(AddSkillsForm))
