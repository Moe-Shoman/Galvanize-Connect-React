import React, { Component } from 'react';
import { addCohort } from '../../actions';
import { connect } from 'react-redux';

function mapStateToProps({ userData }) {
  return {
    userData
  }
}

class AddCohort extends Component {
  constructor(props) {
    super (props)
    this.state = {
      cohort: '',
      showForm: false
    }
  }
  updateCohort = (event) => {
    // console.log(event.target.value, `updateCohort event`)
    this.setState({
      cohort: event.target.value
    })
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return { showForm: !prevState.showForm }
    })
  }
renderButton = (cohort) => {
  console.log("THE COHOOOORT", cohort)

    if(!cohort) {
      return (
        <div>
          <button onClick={this.toggleForm}>ADD COHORT</button>
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.toggleForm}>Edit Cohort</button>
      </div>
    )

  }


  render(){
    const { userData, addCohort } = this.props;

    console.log("USERDATA", userData);
    const { cohort } = this.state;
    if(this.state.showForm){
      return (
        <form>
          <div>
            <label>CohortName</label>
            <input className="cohortName" type="text" value={this.state.cohort} name="cohortName" onChange={this.updateCohort} />
          </div>
          <div>
          <button className="ui button" type="submit" onClick={(e) => {
            e.preventDefault();
            addCohort(userData, cohort);
            this.toggleForm()
          }} >Submit</button>
          </div>
        </form>
      )
    }
    return (
        <div>{this.renderButton(userData.cohort)}</div>
    )
  }
}

export default connect(mapStateToProps, { addCohort })(AddCohort)
