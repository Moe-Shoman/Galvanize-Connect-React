import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase'
import {fetchCohort} from '../../actions';
import {Card, Icon, Image} from 'semantic-ui-react'

function mapStateToProps({cohortVal}) {
    return {cohortVal}
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

    // renderCohorMember = (cohortMembers) => {
    //  if(cohortMembers) {
    //   const members = Object.values(cohortMembers);
    //   return members.map((member) => {
    //    console.log('data after renderCohorMember ', member)
    //   })
    //  }
    // }

    render() {
      // console.log('cohort val is ', this.props.cohortVal);
      const cards = [];
      for (let obj in this.props.cohortVal[0]) {
       console.log('NAME:', obj.name);
       console.log('SRC:', obj.photo);
       console.log('obj:', obj);
        cards.push(
         <Card>
            <Image src={obj.photo}/>
            <Card.Content>
                <Card.Header>{obj.name}</Card.Header>
            </Card.Content>
        </Card>
        )
      }
        // const cohortMems = this.props.cohortVal.map((member) => {
        //     return (
        //         <Card>
        //             <Image src={member.photo}/>
        //             <Card.Content>
        //                 <Card.Header>{member.name}</Card.Header>
        //             </Card.Content>
        //         </Card>
        //     );
        // });

        return (
         <div>{cards}</div>
        )
    }
}

export default connect(mapStateToProps, {fetchCohort})(MemberCards)
