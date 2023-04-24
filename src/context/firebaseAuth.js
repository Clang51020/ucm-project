import { React, useState, createContext} from 'react';
import { auth } from '../Firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const authContext = createContext();

export const AuthContextProvider = props => {
    const [user, setUser] = useState(null);

    function signInUser(props) {
        signInWithEmailAndPassword(auth, props.email, props.password)
        .then((userCredential) => {
            setUser(userCredential.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }


return (
    <authContext.Provider value={user}>
        {props.children}
    </authContext.Provider>
)

}