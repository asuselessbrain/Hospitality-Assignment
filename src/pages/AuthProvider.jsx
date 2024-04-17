import { FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { children, createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)



// social media providers

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const facebookProvider = new FacebookAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(null)

    console.log(user)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    // sign in user

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const signInWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // sign out user

    const logOut = () => {
        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
    }, [])

    const allValues = {
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        updateUserProfile,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;