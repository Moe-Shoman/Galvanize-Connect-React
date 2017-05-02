import React, {Component} from 'react';
import './projectform.css';
import {addProject} from '../../actions';
import {connect} from 'react-redux';

function mapStateToProps({userData, projects}) {
    return {
      userData,
      projects
    }
}

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
        this.setState({[name]: value})
    }
    toggleForm = () => {
        this.setState((prevState) => {
          return {showForm: !prevState.showForm}
        })
    }
    render() {
      const {userData, addProject} = this.props;
      if (this.state.showForm) {
        return(
        <form className="theForm ui form">
          <div>
            <div calssName="field">
              <label htmlFor="projectName">Project Name</label>
              <input className="proName" name="projectName" onChange={this.updateInput} type="text"/>
            </div>
            <div>
              <label htmlFor="description">Project Description</label>
              <input className="proDesc" name="description" onChange={this.updateInput} type="text"/>
            </div>
          </div>
          <button className="ui button" type="submit" onClick={(e) => {
            e.preventDefault();
            addProject(userData, {
              projectName: this.state.projectName,
              description: this.state.description
            }); {this.toggleForm()}
          }} >Submit</button>
          <div>
            <button className='ui button' type="cancel" onClick={(e) =>{
              e.preventDefault();
              {this.toggleForm()}
            }} >Cancel</button>
          </div>
        </form>)
      }
        return (
            <div>
                <button onClick={this.toggleForm}>ADD PROJECT</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, {addProject})(AddProjectForm)
