import firebase from 'firebase';

export const addProjectToFireBase = (project, userData) => {
  firebase.database().ref(`projects/${userData.uid}/${project.projectKeyInFB}`).set(project);
};
export const updateProjectsAndSendToDB = (userData, project) => {
  const projectKeyInFB = firebase.database().ref(`projects/${project.uid}`).push().key;

  const projectInfo = {
    description: project.description,
    projectName: project.projectName,
    uid: userData.uid,
    projectKeyInFB,
  };

  addProjectToFireBase(projectInfo, userData);
  return project;
};

export const returnProjects = (projects) => {
  if (!projects) {
    return [];
  }
  return Object.values(projects);
};

export const deleteProjectFromFB = (project, user) => {
  firebase.database().ref(`projects/${user.uid}/${project.projectKeyInFB}`).remove();
  return project;
};

export const editProjectInFB = (originalProject, user, project) => {
  const projectInfo = {
    description: project.description,
    projectName: project.projectName,
    uid: user.uid,
    projectKeyInFB: originalProject.projectKeyInFB,
  };

  firebase.database().ref(`projects/${user.uid}/${originalProject.projectKeyInFB}`).update(projectInfo);
  return projectInfo;
};

// action creators
export const addProject = (userData, project) => ({
  type: 'ADD_PROJECT',
  payload: updateProjectsAndSendToDB(userData, project),
});

export const fetchProjects = projects => ({
  type: 'FETCH_PROJECTS', payload: returnProjects(projects),
});

export const deleteProject = (project, user) => ({
  type: 'DELETE_PROJECT', payload: deleteProjectFromFB(project, user),
});

export const editProject = (originalProject, user, project) => ({
  type: 'EDIT_PROJECT', payload: editProjectInFB(originalProject, user, project),
});
