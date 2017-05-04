import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSocialLinks } from '../../actions';

 function mapStateToProps({ userData, links }){
   return {
     userData,
     links
   }
 }

 class SocialLinks extends Component {
   constructor(props){
     super(props)
       this.state = {
           LinkedIn: '',
           GitHub: '',
           Twitter: ''
       }
     }

  updateInput = (event) => {
    const givenLink = event.target.value;
    const linkName = event.target.name;
    this.setState({[linkName] : givenLink})
  }

  toggleForm = () => {
      this.setState((prevState) => {
        return {showForm: !prevState.showForm}
      })
  }

  render() {
    const {userData, addSocialLinks } = this.props;
    if (this.state.showForm) {
    return(
        <form className="links ui form">
          <div>
            <div>
              <label htmlFor="socialLink">Add LinkedIn</label>
              <input className="socialLink" name="LinkedIn" type="url" onChange={this.updateInput}/>
            </div>
            <div>
              <label htmlFor="socialLink">Add GitHub</label>
              <input className="socialLink" name="GitHub" type="url" onChange={this.updateInput}/>
            </div>
            <div>
              <label htmlFor="socialLink">Add Twitter</label>
              <input className="socialLink" name="Twitter" type="url" onChange={this.updateInput}/>
            </div>
            <div>
            <button className="ui button" type="submit" onClick={(e) => {
              e.preventDefault();
              addSocialLinks(userData, {
                LinkedIn: this.state.LinkedIn,
                GitHub: this.state.GitHub,
                Twitter: this.state.Twitter
                }
              )
               {this.toggleForm()}
            }}>Submit</button>
            </div>
            <div>
              <button className='ui button' type="cancel" onClick={(e) =>{
                e.preventDefault();
                {this.toggleForm()}
              }} >Cancel</button>
            </div>
          </div>
        </form>)
      }
      return (
          <div>
              <button onClick={this.toggleForm}>ADD SOCIAL LINKS</button>
          </div>
    );
  }
}


export default connect(mapStateToProps, { addSocialLinks })(SocialLinks)
