import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getJobs} from '../../actions';
import { Card } from 'semantic-ui-react'

function mapStateToProps({jobs}) {
    return {jobs}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getJobs
    }, dispatch)
}

const renderJobs = (jobs) => {
    return jobs.map((job, i) => (
        <div key={i}>
            {/* <a href={job.detailUrl}>{job.jobTitle}</a>
            <div>{job.company}</div>
            <div>{job.location}</div> */}


            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header href={job.detailUrl}>{job.jobTitle}</Card.Header>
                  <Card.Meta>{job.company}</Card.Meta>
                  <Card.Description>{job.location}</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>

        </div>
    ))
}

class Jobs extends Component {

    componentWillMount() {
        this.props.getJobs()
    }

    render() {
        const {jobs} = this.props
        return (
            <div>{renderJobs(jobs)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

// const CardExampleHeaderCard = () => (
//   <Card.Group>
//     <Card>
//       <Card.Content>
//         <Card.Header>{job.detailUrl}>{job.jobTitle}</Card.Header>
//         <Card.Meta>{job.company}</Card.Meta>
//         <Card.Description>{job.location}</Card.Description>
//       </Card.Content>
//     </Card>
//   </Card.Group>
// )
//
// export default CardExampleHeaderCard
