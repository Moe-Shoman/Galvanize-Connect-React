import firebase from 'firebase';

// export const restructureFetchedFireBaseObjects = (object) => {
//   const restructuredPosts = Object.values(object);
//   return restructuredPosts;
// }

export const fetchFromFireBase = (socialObj) => {
  if (!socialObj) {
    return [];
  }
  return Object.values(socialObj);
};

export const addSocialLinksToFireBase = (user, socialLinkObj, socialLinkFBKey) => {
  firebase.database().ref(`social/${user.uid}/${socialLinkFBKey}`).set(socialLinkObj);
};

export const updateLinksinFB = (user, socialLinkObj, socialLinkFBKey) => {
  firebase.database().ref(`social/${user.uid}/${socialLinkFBKey}`).update(socialLinkObj);
};

export const updateLinksAndSendToBD = (userData, social, socialLinks) => {
  // const socialLinkFBKey = firebase.database().ref(`social/${userData.uid}`).push().key;
  // const socialLinkObj = {
  //   linkedin: socialLinks.LinkedIn,
  //   github: socialLinks.GitHub,
  //   twitter: socialLinks.Twitter,
  //   uid: userData.uid,
  //   socialLinkFBKey,
  // };
  //
  // if (social) {
  //   updateLinksinFB(userData, socialLinkObj, socialLinkFBKey);
  //   // addSocialLinksToFireBase(userData, socialLinkObj, socialLinkFBKey);
  //   return socialLinkObj;
  // }
  // const socialLinkFBKey = firebase.database().ref(`social/${userData.uid}`).push().key;
  //
  // addSocialLinksToFireBase(userData, socialLinkObj, socialLinkFBKey);
  // updateLinksinFB(userData, socialLinkObj, socialLinkFBKey);

  // if (!socialLinks) {
  //   const socialLinkFBKey = firebase.database().ref(`social/${userData.uid}`).push().key;
  //   const socialLinkObj = {
  //     linkedin: socialLinks.LinkedIn,
  //     github: socialLinks.GitHub,
  //     twitter: socialLinks.Twitter,
  //     uid: userData.uid,
  //     socialLinkFBKey,
  //   };
  //
  //   addSocialLinksToFireBase(userData, socialLinkObj, socialLinkFBKey);
  // }
  // return socialLinkObj;
};

// ACTION CREATORS
export const addSocialLinks = (userData, social, socialLinks) => ({
  type: 'ADD_SOCIAL',
  payload: updateLinksAndSendToBD(userData, social, socialLinks),
});

export const fetchSocial = socialObj => ({
  type: 'FETCH_LINKS', payload: fetchFromFireBase(socialObj),
});
