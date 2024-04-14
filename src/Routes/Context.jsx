import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



// Globals use
export const AuthContext = createContext(null);

const Context = ({children}) => {
 
    // SetUser
    const [user, setUser] = useState(null);

    // Social Login Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user
   const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
   }

    // Google Login
   const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
   }

   //  Github Login
   const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
   }

    // Logout
    const logOut = () => {
    return signOut(auth);
    }

    // Observer
    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        });
    return () =>{
        unSubscribe();
    }
    },[])

    // AuthInfo to use from any place
    const authInfo = {user, createUser, loginUser, googleLogin, githubLogin, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;