import firebase from 'firebase';

export const updateSkillsAndSendToDB = (userData, skill) => {
  const userID = userData.uid;
  addSkillToFireBase(userID, skill);
  return skill;
};

export const addSkillToFireBase = (userID, skill) => {
  const userSkillsInFireBase = firebase.database().ref(`users/${userID}/skills`).push();
  userSkillsInFireBase.set(skill);
};

// Action creators
export const addSkill = (userData, skill) => ({
  type: 'ADD_SKILL',
  payload: updateSkillsAndSendToDB(userData, skill),
});
