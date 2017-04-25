//Helper functions
import firebase from 'firebase';
const loginRequest = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider).then((res) => {
        // const {idToken, accessToken} = res.credential
        let user = res.user;
        // firebase.database().ref('users/'+nextMessage.id).set(nextMessage)
        return user
    }).catch((err) => {
        console.error(err);
    })
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()}
}
