import { React, useState, createContext} from 'react';

export const context = createContext();

export const TestContext = props => {
  const [user, setUser] = useState({
    username: "crl51020",
    email: "clang@chrislang.tech",
    firstName: "Chris",
    lastName: "Lang",
    signedIn: false
})
function handleSignIn() {
  return "Signed In"
}
  return (
    <context.Provider value={[user, handleSignIn]}>
      {props.children}
    </context.Provider>
  )
}