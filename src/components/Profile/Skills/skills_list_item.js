import React from 'react';
import { connect } from 'react-redux';
import './skill.css';


// const mapStateToProps = ({ skills }) => {
//   return {
//     skills,
//   },
// }

const Skill = (props) => {
  const { name } = this.props;
  return (
      <div className="skillFormat">
        <p> {name} </p>
      </div>
  );
}
export default connect(({ skills }) => ({ skills }))(Skill);
