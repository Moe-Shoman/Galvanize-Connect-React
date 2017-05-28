import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Chip from 'material-ui/Chip';
// import semantic from 'semantic-ui-react';
import ProfileHeader from '../../components/Profile/Header/Header';
import '../../components/Profile/profile.css';
import ProjectsList from '../../components/Profile/Projects/ProjectsList';
import SkillsList from '../../components/Profile/Skills/skills_list';
import AddProjectForm from '../../components/Profile/AddProject/AddProjectForm';
// import firebase from 'firebase';
import AddSkillsForm from '../../components/Profile/Skills/SkillsForm';
import AddCohort from '../../components/Profile/AddCohort';
import SocialLinks from '../../components/Profile/AddSocial';
import ListOfSocialLinks from '../../components/Profile/SocialLinks';
import { Sidebar } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    return (
      <Sidebar.Pusher>
        <Grid.Row>
          <Grid.Row>
            <ProfileHeader/>
          </Grid.Row>
          <Grid.Row>
            <AddCohort/>
          </Grid.Row>
          <Grid.Row>
          <div className="styleLinks">
            <div>
            <ListOfSocialLinks />
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="allskills">
            <SkillsList />
          </div>
        </Grid.Row>
        <Grid.Row>
          <AddSkillsForm />
        </Grid.Row>
        <Grid.Row>
            <ProjectsList />
          </Grid.Row>
          <Grid.Row>
        {/* <div className="projectButton"> */}
          <AddProjectForm />
        {/* </div> */}
      </Grid.Row>
    </Grid.Row>
      </Sidebar.Pusher>
    );
  }
}

export default connect(({ userData }) => ({ userData }))(Profile);

























// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import ProfileHeader from '../../components/Profile/Header/Header';
// import '../../components/Profile/profile.css';
// import ProjectsList from '../../components/Profile/Projects/ProjectsList';
// import SkillsList from '../../components/Skills/skills_list';
// import AddProjectForm from '../../components/Profile/AddProject/AddProjectForm';
// // import firebase from 'firebase';
// import AddSkillsForm from '../../components/Profile/Skills/SkillsForm';
// import AddCohort from '../../components/Profile/AddCohort';
// import SocialLinks from '../../components/Profile/AddSocial';
// import ListOfSocialLinks from '../../components/Profile/SocialLinks';
// import { Sidebar, Grid } from 'semantic-ui-react';
//
// class Profile extends Component {
// //     return (
// //       <Sidebar.Pusher>
// //         <Grid>
// //           <Grid.Row>
// //             <ProfileHeader />
// //           </Grid.Row>
// //           <Grid.Row>
// //             <div className="styleLinks">
// //               <ListOfSocialLinks />
// //               <div>
// //                 {/* <SocialLinks /> */}
// //               </div>
// //             </div>
// //           </Grid.Row>
// //           <Grid.Row>
// //             {/* <div className="allskills"> */}
// //               <SkillsList />
// //             {/* </div> */}
// //           </Grid.Row>
// //           <Grid.Row>
// //             <AddSkillsForm />
// //           </Grid.Row>
// //           <Grid.Row>
// //             <ProjectsList />
// //           </Grid.Row>
// //           <Grid.Row>
// //             {/* <div className="projectButton"> */}
// //               <AddProjectForm />
// //             {/* </div> */}
// //           </Grid.Row>
// //           </Grid>
// //       </Sidebar.Pusher>
// //     );
// //   }
// // // }
//
//
//
//   render() {
//     return (
//       <div>
//       <Sidebar.Pusher>
//         <div>
//           <div className="userPro">
//             <div className="userName">
//               {/* <h2>{renderUserName(this.props.userData)}</h2> */}
//               <p className="userName">{this.props.userData.name}</p>
//               <img className="ui circular image imgPro" src={this.props.userData.photo} />
//             </div>
//             <div className="cohortStyle">
//               <h3 className="numStyle">{this.props.userData.cohort}</h3>
//             </div>
//               <div>
//                 <Grid>
//                 <AddCohort />
//               </Grid>
//               <ListOfSocialLinks />
//
//                 <SocialLinks />
//             <SkillsList />
//
//               <AddSkillsForm />
//             <ProjectsList />
//             {/* <div className="projectButton"> */}
//               <AddProjectForm />
//             </div>
//             </div>
//             </div>
//       </Sidebar.Pusher>
//       </div>
//     );
//   }
// }
//
// export default connect(({ userData }) => ({ userData }))(Profile);
