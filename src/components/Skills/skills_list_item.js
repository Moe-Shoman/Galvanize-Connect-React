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

  const { name } = this.props;
      return (
        <div >
          <div className="skillFormat">
            <p>{name}</p>
          </div>
        </div>
      )
}
export default connect(mapStateToProps)(Skill);
