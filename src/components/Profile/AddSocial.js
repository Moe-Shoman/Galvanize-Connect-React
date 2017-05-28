import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSocialLinks } from '../../actions';

//*****************************************************
import { Popup, Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react'

// class ModalExampleDimmer extends Component {
   class SocialLinks extends Component {
     constructor(props){
       super(props)
         this.state = {
             LinkedIn: '',
             GitHub: '',
             Twitter: '',
             open: false,
         }
       }
  // state = { open: false }
    updateInput = (event) => {
      const givenLink = event.target.value;
      const linkName = event.target.name;
      this.setState({[linkName] : givenLink})
    }

  //
  //   render() {
  //     const {userData, addSocialLinks } = this.props;


  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer, userData, addSocialLinks } = this.state;

    return (
      <div>
        <Button onClick={this.show('blurring')}>Edit Social Links</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Enter Your Social Links</Modal.Header>
          <Modal.Content>
                     <Form className="links ui form">
                           {/* <label htmlFor="socialLink">Add LinkedIn</label> */}
                           <Header>LinkedIn</Header>
                           <Modal.Content>
                           <TextArea className="socialLink" name="LinkedIn" type="url" onChange={this.updateInput}/>
                           {/* <label htmlFor="socialLink">Add GitHub</label> */}
                           <Header>GitHub</Header>
                           <TextArea className="socialLink" name="GitHub" type="url" onChange={this.updateInput}/>
                           {/* <label htmlFor="socialLink">Add Twitter</label> */}
                           <Header>Twitter</Header>
                           <TextArea className="socialLink" name="Twitter" type="url" onChange={this.updateInput}/>
                           </Modal.Content>
                           <Button className="ui button" type="submit" onClick={(e) => {
                          e.preventDefault();
                          addSocialLinks(userData, {
                            LinkedIn: this.state.LinkedIn,
                            GitHub: this.state.GitHub,
                            Twitter: this.state.Twitter
                          });
                          {this.close}
                        }}>
                        Submit
                      </Button>
                        {/* </div> */}
                        <div>
                          <Button className='ui button' type="cancel" onClick={(e) =>{
                            e.preventDefault();
                            // {this.toggleForm()}
                            {this.close}
                          }} >Cancel</Button>
                        </div>
                      {/* </div> */}
                    </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}














//  class SocialLinks extends Component {
//    constructor(props){
//      super(props)
//        this.state = {
//            LinkedIn: '',
//            GitHub: '',
//            Twitter: ''
//        }
//      }
//
//   updateInput = (event) => {
//     const givenLink = event.target.value;
//     const linkName = event.target.name;
//     this.setState({[linkName] : givenLink})
//   }
//
//   toggleForm = () => {
//       this.setState((prevState) => {
//         return {showForm: !prevState.showForm}
//       })
//   }
//
//   render() {
//     const {userData, addSocialLinks } = this.props;
//     if (this.state.showForm) {
//     return(
//         <form className="links ui form">
//           <div>
//             <div>
//               <label htmlFor="socialLink">Add LinkedIn</label>
//               <input className="socialLink" name="LinkedIn" type="url" onChange={this.updateInput}/>
//             </div>
//             <div>
//               <label htmlFor="socialLink">Add GitHub</label>
//               <input className="socialLink" name="GitHub" type="url" onChange={this.updateInput}/>
//             </div>
//             <div>
//               <label htmlFor="socialLink">Add Twitter</label>
//               <input className="socialLink" name="Twitter" type="url" onChange={this.updateInput}/>
//             </div>
//             <div>
//             <button className="ui button" type="submit" onClick={(e) => {
//               e.preventDefault();
//               addSocialLinks(userData, {
//                 LinkedIn: this.state.LinkedIn,
//                 GitHub: this.state.GitHub,
//                 Twitter: this.state.Twitter
//                 }
//               )
//                {this.toggleForm()}
//             }}>Submit</button>
//             </div>
//             <div>
//               <button className='ui button' type="cancel" onClick={(e) =>{
//                 e.preventDefault();
//                 {this.toggleForm()}
//               }} >Cancel</button>
//             </div>
//           </div>
//         </form>)
//       }
//       return (
//           <div>
//               <button onClick={this.toggleForm}>ADD SOCIAL LINKS</button>
//           </div>
//     );
//   }
// }
//
//
export default connect(({ userData, links}) => ({ userData, links}), { addSocialLinks })(SocialLinks);
// export default connect(({ userData, links}) => ({ userData, links}), { addSocialLinks })(ModalExampleDimmer);

//reference
// export default connect(({ cohortVal, userData }) => ({ cohortVal, userData }), { fetchCohort })(MemberCards);
