import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editSocialLink, deleteSocialLink } from '../../../actions';
import { Popup, Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react';

class EditSocial extends Component {
  constructor(props) {
    super(props);
    this.state = ({
     modalOpen: false,
     input: '',
    });
  }

  handleOpen = (e) => this.setState({
  modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    const { social, user } = this.props;
    if (user.uid === social.uid) {
      return (
        <div>
         <Button onClick={this.handleOpen}>Update Social Links</Button>
          <Modal  open={this.state.modalOpen}>
            <Modal.Header>Enter Your Social Links</Modal.Header>
            <Modal.Content>
               <Form className="links ui form">
                  <Header>LinkedIn</Header>
                    <Modal.Content>
                      <TextArea rows="2" className="socialLink" name="LinkedIn" type="url"  value={social.linkedin} onChange={this.updateInput}/>
                   </Modal.Content>
                   <div id="submitlink">
                    <Button className="ui button" color="blue" type="submit" onClick={(e) => {
                     e.preventDefault();
                     editSocialLink(user, {
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
      );
    }
  }
}

export default connect(null, ({ editSocialLink, deleteSocialLink }))(EditSocial);
