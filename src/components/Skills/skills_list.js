import React, {Component} from 'react';
import { fetchSkills } from '../../actions';
import Chip from 'material-ui/Chip';
import {connect} from 'react-redux';
import { styles } from 'material-ui/Chip'
import firebase from 'firebase';
import './skill.css';

const mapStateToProps = ({ skills, userData }) => {
  return {
    skills,
    userData
  }
}


class SkillsList extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    firebase.database().ref(`users/${this.props.userData.name}/skills`).once("value", (snapshot) => {
      return this.props.fetchSkills(snapshot.val());
    });
  }

  renderSkills = (skills) => {
    if (skills) {
      return skills.map((skill, i)=>{
        return (
          <div key={i}>
            <div className="skillFormat">
              {skill }
            </div>
          </div>
        )
      })
    }
  }
  render(){
    const { skills } = this.props
    return(
      <div>
        <div>
          {this.renderSkills(skills)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {fetchSkills})(SkillsList);
