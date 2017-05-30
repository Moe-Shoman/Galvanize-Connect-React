import firebase from 'firebase';

export const addProjectToFireBase = (username, project) => {
  const userProjectsInFireBase = firebase.database().ref(`users/${username}/projects`).push();
  userProjectsInFireBase.set(project);
};
export const updateProjectsAndSendToDB = (userData, project) => {
  const username = userData.uid;
  addProjectToFireBase(username, project);
  return project;
};

// action creators
export const addProject = (userData, project) => ({
  type: 'ADD_PROJECT',
  payload: updateProjectsAndSendToDB(userData, project),
});
