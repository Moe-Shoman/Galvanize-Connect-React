export const login = (props) => {
  return {
    type: 'LOGIN',
    payload: loginRequest(props)
  }
}
