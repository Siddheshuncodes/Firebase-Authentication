import { createContext, useState, useEffect, useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    confirmPasswordReset,
} from "firebase/auth";
import { auth } from '../firebase';

const userAuthContext = createContext();
export function resetPassword(auth, email, actionCodeSettings){
    const confirmPasswordReset(code){
    // const actionCodeSettings = {
    //     url: 'https://www.example.com/?email=user@example.com',
    //     iOS: {
    //        bundleId: 'com.example.ios'
    //     },
    // if(!password){
        // return sendPasswordResetEmail(auth, email, password)
        await sendPasswordResetEmail(auth, email, actionCodeSettings);
        // Obtain code from user.
        await confirmPasswordReset(email, 
            code
            );
        }
    // }
}

export function UserAuthContextProvider({ children }){
    const [user, setUser] = useState('');
    


    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password){
            console.log("Email", email)
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut(){
        return signOut(auth);
    }
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[]);
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, resetPassword}}>
        { children }
    </userAuthContext.Provider>
}
export function useUserAuth(){
    return useContext(userAuthContext);
}