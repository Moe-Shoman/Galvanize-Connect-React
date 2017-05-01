import React from 'react';
// import semantic from 'semantic-ui-react';
import './skill.css';
import {connect} from 'react-redux';

const mapStateToProps = ({ skills }) => {
  return {
    skills
  }
}


const Skill = (props) => {
  const { skillName } = this.props;
      return (
        <div>
          <div className="skillFormat">
            <p>{skillName}</p>
          </div>
        </div>
      )
}
export default connect(mapStateToProps)(Skill);
