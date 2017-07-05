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
        Galvanize friends, share your skills & projects, and event get tech news.
       </p>

      <p>
        This website is constantly improving. New features are being added weekly, while other features are being refactored. If you have any questions, or suggestions, email me at Gurdipsingh1990@gmail.com
       </p>
    </div>
  </div>
    );

export default LearnMore;
