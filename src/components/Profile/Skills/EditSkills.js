import React, { Component } from 'react';
import { deleteSkills, editSkills } from '../../../actions';
import { connect } from 'react-redux';
import { Form, TextArea, Card, Feed, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react';
import './skill.css';

class EditSkills extends Component {
 constructor(props) {
   super(props);
   this.state = {
    skill: this.props.skills.skill,
    modalOpen: false,
   }
 }

 updateInput = (event) => {
     const value = event.target.value;
     const name = event.target.name;
     this.setState({[name]: value})
 }
 handleOpen = (e) => this.setState({
   modalOpen: true,
 })

 handleClose = (e) => this.setState({
   modalOpen: false,
 })

  render() {
    const { skills, user } = this.props;
    if (user.uid === skills.uid) {
      return (
        <div>
          <div className="delete">
            <Icon
             name='close'
              color="red"
              type="submit" onClick={(e) => {
                e.preventDefault();
                deleteSkills(skills, user);
              }}
            ></Icon>
          </div>
          <div className="edit">
            <Modal trigger={<Icon onClick={this.handleOpen} name='write'></Icon>} open={this.state.modalOpen}>
              <Modal.Content>
                <Form className="theForm ui form">
                  <Modal.Content>
                    <Header>Edit Skill </Header>
                      <TextArea className="skill" name="skill" value={this.state.skill} onChange={this.updateInput} type="text" autoHeight/>
                  </Modal.Content>
                    <Button
                      className="ui button" type="submit"
                      onClick={(e) => {
                      e.preventDefault();
                      editSkills(user, skills, this.state.skill);
                      this.handleClose();
                      }} >
                      Submit
                    </Button>
                    <Button className='ui button' type="cancel" onClick={(e) =>{
                      e.preventDefault();
                      this.handleClose();
                      }}>
                      Cancel
                    </Button>
                </Form>
            </Modal.Content>
          </Modal>
          </div>
        </div>
      );
    }
  }


}

export default connect(null, ({ deleteSkills, editSkills }))(EditSkills);
