import React, { Component } from 'react';
import { connect } from 'react-redux';
import './skill.css';

class SkillsList extends Component {
  constructor(props){
    super(props)
  }
  renderSkills = (skills) => {
    if (skills) {
      return skills.map((skill, i) => {
        return (
          <div key={i}>
            <div className="skillFormat">
              { skill }
            </div>
          </div>
        )
      });
    }
  }
  render(){
    const { skills } = this.props.userData;
    return(
      <div>
        <div>
          {this.renderSkills(skills)}
        </div>
      </div>
    );
  }
}

export default connect(({ userData }) => ({ userData }))(SkillsList);
