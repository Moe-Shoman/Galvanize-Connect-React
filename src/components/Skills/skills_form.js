import React, {Component} from 'react';
import { reduxForm, Field  } from 'redux-form';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addSkill } from '../../actions';


function mapStateToProps ({ userData, skills, form }) {
 return {
  userData,
  skills,
  form
 }
}

class SkillForm extends Component {
    render() {
     const { userData, addSkill, form } = this.props;
        return (
           <form >
            <div>
              <div>
                <label htmlFor="skill">Add Skill</label>
                <Field  name="skill" component="input" type="text"/>
               </div>
            </div>
              <button type="submit" onClick={(e)=> {e.preventDefault(); addSkill(userData,form)}}>Submit</button>
           </form>
        )
    }
}


export default connect(mapStateToProps, { addSkill })(reduxForm({
 form: 'SkillForm',
})(SkillForm))
