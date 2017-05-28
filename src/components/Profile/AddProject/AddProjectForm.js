import React, {Component} from 'react';
import './projectform.css';
import {addProject} from '../../../actions';
import {connect} from 'react-redux';
import { Modal, Header, Button, Form, TextArea } from 'semantic-ui-react';

class AddProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
            description: '',
            showForm: false
        }
    }
    updateInput = (event) => {
        const value = event.target.value;
        const name = event.target.name
        console.log("NAME in UPDATEINOUT", name);
        this.setState({[name]: value})
    }
    toggleForm = () => {
        this.setState((prevState) => {
          return {showForm: !prevState.showForm}
        })
    }
    render() {
      const {userData, addProject } = this.props;
      if (this.state.showForm) {
        return(
        <Modal trigger={<Button onClick={this.handleOpen} >Add A Project </Button>} open={this.state.modalOpen}>
          <Modal.Content>
            <Form className="theForm ui form">
              <Modal.Content>
                <Header>Project Name </Header>
                  <TextArea className="proName" name="projectName" onChange={this.updateInput} type="text" autoHeight/>
                    <Header>Project Description</Header>
                  <TextArea className="proDesc" name="description" onChange={this.updateInput} type="text" autoHeight/>
              </Modal.Content>
                <Button
                  className="ui button" type="submit"
                  onClick={(e) => {
                  e.preventDefault();
                  addProject(userData, {
                  projectName: this.state.projectName,
                  description: this.state.description
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
      )
    }
}
}

export default connect(({ userData, projects }) => ({ userData, projects}), {addProject})(AddProjectForm);
//reference
// export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
