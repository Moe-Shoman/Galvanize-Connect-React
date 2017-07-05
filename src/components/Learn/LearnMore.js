import React, { Component } from 'react';
// import Footer from './footer.js';
import { Grid, Button } from 'semantic-ui-react';
// import googleB from '../../assets/googleAssets/google-logo.png';
import './learnmore.css';
import GoogleAuthentication from '../GoogleAuth/GoogleAuth';

const LearnMore = () => (
  <div className="aboutPage">
    <h1>Galvanize Connect</h1>
    <div className="description">
      <p className="welcomeparagraph">
        Welcome to Galvanize-Connect. The best way to maintain communication with your
        Galvanize friends, share your skills and projects, and event find a job you might like.
       </p>
    </div>
  </div>
    );

export default LearnMore;
