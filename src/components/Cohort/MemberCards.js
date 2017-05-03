import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';


function mapStateToProps ({ userData}) {
 return {
  userData,
 }
}

class MemberCards extends Component {
 constructor(props) {
     super(props)
 }
 componentDidMount() {
     firebase.database().ref('cohorts').once("value", (snapshot) => {
         return this.props.fetchCohort(snapshot.val());
     })
 }
    render() {
     // const { userData } = this.props;
     console.log('this.prop in MemberCards is  -------  ', this.props);
        return (
         <p>hi</p>
        )
    }
}

export default connect(mapStateToProps, {fetchCohort})(MemberCards)
