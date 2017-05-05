import React, {Component} from 'react';
import { fetchSocial } from '../../actions';
// import Skill from './skills_list_item';
import {connect} from 'react-redux';
import firebase from 'firebase';
// import './skill.css';
import { Button, Icon, Size } from 'semantic-ui-react';

const mapStateToProps = ({ userData }) => {
  return {
    userData
  }
}



class ListOfSocialLinks extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    firebase.database().ref(`users/${this.props.userData.name}`).once("value", (snapshot) => {

      const user = snapshot.val()

      const links = user.SocialInks;
      return this.props.fetchSocial(links);
    })
  }
// handleClick = () => {
//   return <a href='https://www.google.com'></a>
// }
renderSoLinks = (userData)=> {
  console.log("USERDATA in RENDERSOLINKS", userData)
    return (
      <div className="styleLinks">
        <div className="github">
          <Button  href={userData.GitHub} icon='github square' size='large'/>
        </div>
          <div className="linkedIn">
            <Button  href={userData.LinkedIn} icon='linkedin square' size='large'/>
          </div>
          <div className="twitter">
            <Button href={userData.Twitter} icon='twitter' size='large'/>
          </div>
      </div>
  )
}
  render() {
    const {userData} = this.props
    return(
      <div>
        <div>
            {this.renderSoLinks(userData)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchSocial })(ListOfSocialLinks);
