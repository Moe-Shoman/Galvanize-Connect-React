import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import EditSocial from './EditSocial'
import { Button, Icon, Size, Header, Popup, Grid } from 'semantic-ui-react';
import { fetchSocial } from '../../../actions';
import './social.css';


class ListOfSocialLinks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.database().ref(`social/${this.props.userData.uid}`).on('value', snapshot => this.props.fetchSocial(snapshot.val()));
  }

  renderSocial = (social, userData) => {
   if (social) {
     return social.map((social, i) => {
      return (
        <div className="social">
         <div className="github">
        <Popup
          trigger={<Button href={social.github} icon="github square" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' size="large" href={social.github}>{social.github}</Header>
              <EditSocial  social={social} user={userData}/>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>

       <div className="linkedin">
        <Popup
          trigger={<Button href={social.linkedin} icon="linkedin square" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' icon="github square" size="large">{social.linkedin}</Header>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>

       <div className="twitter">
        <Popup
          trigger={<Button href={social.twitter} icon="twitter" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' size="large">{social.twitter}</Header>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>
      </div>
       )
     });
   }
  }

  render() {
    const { social, userData } = this.props;
    return (
     <div>{this.renderSocial(social, userData)}</div>
    )
   }
}

export default connect(({ userData, social }) => ({ userData, social }), { fetchSocial })(ListOfSocialLinks);
