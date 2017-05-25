import firebase from 'firebase';

export const updateSkillsAndSendToDB = (userData, skill) => {
  const userName = userData.name;
  addSkillToFireBase(userName, skill);
  return skill;
};

export const addSkillToFireBase = (userName, skill) => {
  const userSkillsInFireBase = firebase.database().ref(`users/${userName}/skills`).push();
  userSkillsInFireBase.set(skill);
};

// Action creators
export const addSkill = (userData, skill) => ({
  type: 'ADD_SKILL',
  payload: updateSkillsAndSendToDB(userData, skill),
});
