import React, { Component } from 'react';
import { fetchSocial } from '../../../actions';
// import Skill from './skills_list_item';
import { connect } from 'react-redux';
import firebase from 'firebase';
// import './skill.css';
import { Button, Icon, Size } from 'semantic-ui-react';

const ListOfSocialLinks = ({ userData }) => {
  const { GitHub, LinkedIn, Twitter } = userData;
  return (
    <div id="social">
      <div>
        <div className="styleLinks">
          <div className="github">
            <Button href={GitHub} icon="github square" size="large" />
          </div>
          <div className="linkedIn">
            <Button href={LinkedIn} icon="linkedin square" size="large" />
          </div>
          <div className="twitter">
            <Button href={Twitter} icon="twitter" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ userData }) => ({ userData }), { fetchSocial })(ListOfSocialLinks);
