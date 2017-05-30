import React, {Component} from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../AddCohort';
import { Grid } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userData }) => {
  return (
    <Grid>
      <div className="userPro">
        <Grid.Row>
        <div className="userName">
          <h1 className="userName">{userData.name}</h1>
          <img className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
        </div>
      {/* </Grid.Row> */}
        {/* <Grid.Row> */}
        <div className="cohortStyle">
          <h1 className="numStyle">{userData.cohort}</h1>
        </div>
        </Grid.Row>

          <Grid.Row>
            <AddCohort />
          </Grid.Row>
          </div>

        {/* </div> */}
          {/* </Grid.Row> */}
      {/* </div> */}
      </Grid>
    );
};

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
