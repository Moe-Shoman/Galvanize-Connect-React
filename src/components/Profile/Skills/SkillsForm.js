import React, { Component } from 'react';
import { addSkill } from '../../../actions';
import { connect } from 'react-redux';
import {Button, Form, TextArea, Modal, Header } from 'semantic-ui-react';
import './skill.css';


class AddSkillsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      skill: '',
      modalOpen: false,
    }
  }

  handleOpen = (e) => this.setState({
  modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  updateInput = (event) => {
    this.setState({
      skill: event.target.value
    })
  }

  render() {
   const { userData, addSkill } = this.props;
      return (
        <Modal trigger={<Button onClick={this.handleOpen} >Add Skill</Button>} open={this.state.modalOpen}>
          <Modal.Content>
            <Header>
              <h3>Enter A Skill</h3>
            </Header>
            <Form className="theForm ui form">
                <TextArea className="skillName" name="skill" type="text" onChange={this.updateInput} autoHeight/>
              <Button
                 className="ui button" type="submit"
                 onClick={(e) => {
                 e.preventDefault();
                 addSkill(userData, this.state.skill);
                 this.handleClose();
                  }}
                  >
                Submit
              </Button>
                <Button className="ui button" type="cancel" onClick={(e) =>{
                 e.preventDefault()
                 this.handleClose();
                 }}>
                 Cancel
               </Button>
            </Form>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default connect(({ userData, skills }) => ({ userData, skills }), { addSkill })(AddSkillsForm);
