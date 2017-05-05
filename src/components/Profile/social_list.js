import React, {Component} from 'react';
import { fetchSocial } from '../../actions';
// import Skill from './skills_list_item';
import {connect} from 'react-redux';
import firebase from 'firebase';
// import './skill.css';

const mapStateToProps = ({ userData }) => {
  return {
    userData
  }
}



class ListOfSocialLinks extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    firebase.database().ref(`users/${this.props.userData.name}`).once("value", (snapshot) => {

      const user = snapshot.val()

      const links = user.SocialInks;
      return this.props.fetchSocial(links);
    })
  }

renderSoLinks = (userData)=> {
    return (
    <div>
      <div>
        {userData.GitHub}
      </div>
      <div>
        {userData.LinkedIn}
      </div>
      <div>
        {userData.Twitter}
      </div>
    </div>
  )
}
  render() {
    const {userData} = this.props
    return(
      <div>
        <p> I'm HERERE IN THE SOCIALLIST COMPONENT</p>
        <div>
            {this.renderSoLinks(userData)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchSocial })(ListOfSocialLinks);
