import React, { Component } from 'react';
import { deleteProject, editProject } from '../../../actions';
import { connect } from 'react-redux';
import { Form, TextArea, Card, Feed, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react';
import './project.css'

class EditProject extends Component {
 constructor(props) {
   super(props);
   this.state = {
    projectName: this.props.project.projectName,
    description: this.props.project.description,
    modalOpen: false
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
    const { project, user } = this.props;
    if (user.uid === project.uid) {
      return (
        <div id="updateproject">
          <div className="delete">
            <Icon
              color="red"
              name='close'
              type="submit" onClick={(e) => {
                e.preventDefault();
                deleteProject(project, user);
              }}
            ></Icon>
          </div>
          <div className="edit">
            <Modal trigger={<Icon name='write' onClick={this.handleOpen} > </Icon>} open={this.state.modalOpen}>
              <Modal.Content>
                <Form className="theForm ui form">
                  <Modal.Content>
                    <Header>Project Name </Header>
                      <TextArea className="proName" value={this.state.projectName} name="projectName" onChange={this.updateInput} type="text" autoHeight/>
                        <Header>Project Description</Header>
                      <TextArea className="proDesc" value={this.state.description} name="description" onChange={this.updateInput} type="text" autoHeight/>
                  </Modal.Content>
                    <Button
                      className="ui button" type="submit"
                      onClick={(e) => {
                      e.preventDefault();
                      editProject(project, user, {
                      projectName: this.state.projectName,
                      description: this.state.description,
                     });
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
    return <div />;
  }

}

export default connect(null, ({ deleteProject, editProject }))(EditProject);
