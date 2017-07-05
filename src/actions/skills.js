import firebase from 'firebase';

export const addSkillToFireBase = (skillsObj, userData) => {
  firebase.database().ref(`skills/${userData.uid}/${skillsObj.skillsKeyInFB}`).set(skillsObj);
};

export const updateSkillsAndSendToDB = (userData, skill) => {
  const skillsKeyInFB = firebase.database().ref(`skills/${userData.uid}`).push().key;

  const skillsInfo = {
    skill,
    uid: userData.uid,
    skillsKeyInFB,
  };

  addSkillToFireBase(skillsInfo, userData);
  return skill;
};

const fetchFromFireBase = (skillsObj) => {
  if (!skillsObj) {
    return [];
  }
  return Object.values(skillsObj);
};

export const deleteSkillFromFB = (skills, user) => {
  firebase.database().ref(`skills/${user.uid}/${skills.skillsKeyInFB}`).remove();
  return skills;
};

export const editSkillInFB = (user, skills, newSkill) => {
  const skillsInfo = {
    skill: newSkill,
    skillsKeyInFB: skills.skillsKeyInFB,
    uid: user.uid,
  };
  firebase.database().ref(`skills/${user.uid}/${skills.skillsKeyInFB}`).update(skillsInfo);
  return skillsInfo;
};

// Action creators
export const addSkill = (userData, skill) => ({
  type: 'ADD_SKILL',
  payload: updateSkillsAndSendToDB(userData, skill),
});

export const fetchSkills = skills => ({
  type: 'FETCH_SKILLS', payload: fetchFromFireBase(skills),
});

export const deleteSkills = (skills, user) => ({
  type: 'DELETE_SKILLS', payload: deleteSkillFromFB(skills, user),
});

export const editSkills = (user, skills, newSkill) => ({
  type: 'EDIT_SKILLS', payload: editSkillInFB(user, skills, newSkill),
});
