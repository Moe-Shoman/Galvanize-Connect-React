import firebase from 'firebase';

export const updateCohortAndSendToDB = (userData, cohort) => {
  addCohortToFireBase(userData, cohort);
  return cohort;
};

export const addCohortToFireBase = (userData, cohort) => {
  const userCohortInFireBase = firebase.database();
  userCohortInFireBase.ref('users').child(`${userData.name}`).update({ cohort });
  userCohortInFireBase.ref('cohorts').child(`${cohort}`).push().set({ name: userData.name, photo: userData.photo });
};

// action CREATORS

export const addCohort = (userData, cohort) => ({
  type: 'ADD_COHORT',
  payload: updateCohortAndSendToDB(userData, cohort),
});
