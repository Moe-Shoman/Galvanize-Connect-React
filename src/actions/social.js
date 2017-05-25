import firebase from 'firebase';

// export const restructureFetchedFireBaseObjects = (object) => {
//   const restructuredPosts = Object.values(object);
//   return restructuredPosts;
// }

export const fetchFromFireBase = (userData) => {
  console.log('inside of fetchFromFireBase');
};

export const addSocialLinksToFireBase = (username, SocialInks) => {
  const userSocialInFireBase = firebase.database();
  userSocialInFireBase.ref('users').child(`${username}`).update({ GitHub: SocialInks.GitHub, LinkedIn: SocialInks.LinkedIn, Twitter: SocialInks.Twitter });
};

export const updateLinksAndSendToBD = (userData, SocialInks) => {
  const username = userData.name;
  addSocialLinksToFireBase(username, SocialInks);
  return SocialInks;
};

// ACTION CREATORS
export const addSocialLinks = (userData, SocialInks) => ({
  type: 'ADD_SOCIAL',
  payload: updateLinksAndSendToBD(userData, SocialInks),
});

export const fetchSocial = userData => ({ type: 'FETCH_LINKS', payload: fetchFromFireBase(userData) });
