import React, {Component} from 'react';
// import Job from './Job';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getJobs} from '../../actions';

function mapStateToProps({jobs}) {
    return {jobs}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getJobs
    }, dispatch)
}

const renderJobs = (jobs) => {
    return jobs.map((job) => (
        <div>
            <a href={job.detailUrl}>{job.jobTitle}</a>
            <div>{job.company}</div>
            <div>{job.location}</div>
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
