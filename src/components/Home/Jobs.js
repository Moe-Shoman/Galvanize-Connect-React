import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJobs } from '../../actions';
import { Card, Grid } from 'semantic-ui-react';


const renderJobs = jobs => jobs.map((job, i) => (
  <Grid.Row key={i}>
    <Grid.Column width={10}>
      <Card.Group className="jobCards" fluid>
        <Card>
          <Card.Content>
            <Card.Header href={job.detailUrl}>{job.jobTitle}</Card.Header>
            <Card.Meta>{job.company}</Card.Meta>
            <Card.Description>{job.location}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  </Grid.Row>
    ));

class Jobs extends Component {

  componentWillMount() {
    this.props.getJobs();
  }
  render() {
    const { jobs } = this.props;
    return (
      <Grid>
        {renderJobs(jobs)}
      </Grid>
    );
  }
}

export default connect(({ jobs }) => ({ jobs }), { getJobs })(Jobs);
