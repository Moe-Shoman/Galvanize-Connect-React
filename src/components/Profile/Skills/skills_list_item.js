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
    <div>
      <div className="skillFormat">
        <p> {name} </p>
      </div>
    </div>
  );
}
export default connect(({ skills }) => ({ skills }))(Skill);

//reference
// export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
