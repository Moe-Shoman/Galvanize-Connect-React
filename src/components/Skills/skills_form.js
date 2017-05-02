import React, { Component } from 'react';
import { addSkill } from '../../actions';
import { connect } from 'react-redux';





function mapStateToProps({ userData, skills}){
  return {
    userData,
    skills,
  }
}

class AddSkillsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      skill: ''
    }
  }
  updateInput = (event) => {
    this.setState({
      skill: event.target.value
    })
  }
  render() {
   const { userData, addSkill } = this.props;
      return (
       <form className="theForm ui form">
         <div>
           <div calssName="field">
              <label htmlFor="skillName">Add Skill</label>
              <input className="skillName" name="skill" type="text" onChange={this.updateInput}/>
              </div>
          </div>
         <button className="ui button" type="submit" onClick={(e) => {e.preventDefault(); addSkill(userData, this.state.skill)}}>Submit</button>
       </form>
      )
  }
}




export default connect(mapStateToProps, { addSkill })(AddSkillsForm)
