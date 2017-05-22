import React, { Component } from 'react';
import { addSkill } from '../../actions';
import { connect } from 'react-redux';
import './skill.css';


class AddSkillsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      skill: '',
      showForn: false
    }
  }
  updateInput = (event) => {
    this.setState({
      skill: event.target.value
    })
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {showForm: !prevState.showForm}
    })
  }
  render() {
   const { userData, addSkill } = this.props;
    if (this.state.showForm) {
      return (
       <form className="theForm ui form">
         <div>
           <div>
              <label htmlFor="skillName">Add Skill</label>
              <input className="skillName" name="skill" type="text" onChange={this.updateInput}/>
            </div>
          </div>
         <button className="ui button" type="submit" onClick={(e) => {
           e.preventDefault();
           addSkill(userData, this.state.skill);
           this.toggleForm()
         }}>Submit</button>
         <div>
           <button className='ui button' type="cancel" onClick={(e) =>{
             e.preventDefault();
             this.toggleForm()
           }}>Cancel</button>
         </div>
       </form>
      )
    }
      return (
        <div>
            <button onClick={this.toggleForm}>ADD SKILL</button>
        </div>
    )
  }
}

export default connect(({ userData, skills }) => ({ userData, skills }), { addSkill })(AddSkillsForm)
//reference
// export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
