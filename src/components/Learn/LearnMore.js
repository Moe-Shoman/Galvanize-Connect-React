import React, { Component } from 'react';
// import Footer from './footer.js';
import { Grid, Button } from 'semantic-ui-react';
// import googleB from '../../assets/googleAssets/google-logo.png';
import './learnmore.css';
import GoogleAuthentication from '../GoogleAuth/GoogleAuth';

const LearnMore = () => {
  return (
      <div className="aboutPage">
        <h1>Galvanize Connect</h1>
        <div className="description">
          <p>
            Welcome to Galvanize-Connect. The best way to maintain communication with your
            Galvanie friends.
          </p>
          <h3>Sing In with Google</h3>

          <div>GOOGLE BUTTON</div>
          {/* <div>
            <GoogleAuthentication/>
          </div> */}
      </div>
    </div>
    );
}

export default LearnMore;
