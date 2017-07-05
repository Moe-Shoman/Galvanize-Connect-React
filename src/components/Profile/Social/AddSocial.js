import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSocialLinks, social } from '../../../actions';
import { Popup, Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react'

  class SocialLinks extends Component {
     constructor(props){
       super(props)
         this.state = {
             LinkedIn: '',
             GitHub: '',
             Twitter: '',
             modalOpen: false,
         }
       }

    updateInput = (event) => {
      const givenLink = event.target.value;
      const linkName = event.target.name;
      this.setState({[linkName] : givenLink})
    }

    handleOpen = (e) => this.setState({
    modalOpen: true,
    })

    handleClose = (e) => this.setState({
      modalOpen: false,
    })

  render() {
    const { userData, social } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen}>Update Social Links</Button>
        <Modal  open={this.state.modalOpen}>
          <Modal.Header>Enter Your Social Links</Modal.Header>
          <Modal.Content>
             <Form className="links ui form">
                <Header>LinkedIn</Header>
                  <Modal.Content>
                    <TextArea rows="2" className="socialLink" name="LinkedIn" type="url"   onChange={this.updateInput}/>
                    <Header>GitHub</Header>
                     <TextArea rows="2" className="socialLink" name="GitHub" type="url" onChange={this.updateInput}/>
                    <Header>Twitter</Header>
                     <TextArea rows="2" className="socialLink" name="Twitter" type="url" onChange={this.updateInput}/>
                 </Modal.Content>
                 <div id="submitlink">
                  <Button className="ui button" color="blue" type="submit" onClick={(e) => {
                   e.preventDefault();
                   addSocialLinks(userData, social, {
                     LinkedIn: this.state.LinkedIn,
                     GitHub: this.state.GitHub,
                     Twitter: this.state.Twitter
                    });
                    this.handleClose();
                   }}>Submit</Button>
                  </div>
                <div id="cancellink">
                  <Button className='ui button' color="red" type="cancel" onClick={(e) =>{
                    e.preventDefault();
                    this.handleClose()
                  }} >Cancel</Button>
                </div>
            </Form>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}

export default connect(({ userData, social}) => ({ userData, social}), { addSocialLinks })(SocialLinks);
