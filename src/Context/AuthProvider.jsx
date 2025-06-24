import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    let[myUser,setMyUser]=useState(null)
    let [loading,setLoading]=useState(true);
    let [profileData,setProfileData]=useState([])
    let CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    let SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    let updateProfileUser=(displayName)=>{
        return updateProfile(auth.currentUser,displayName)
    }
    useEffect(()=>{
        let unSubscribe=onAuthStateChanged(auth,res=>{
            setMyUser(res);
            setLoading(false);
        })
        return ()=>unSubscribe;
    },[])
    let UserInfo={
        CreateUser,
        loading,
        setLoading,
        SignIn,
        profileData,
        setProfileData,
        myUser,
        setMyUser,
        updateProfileUser,
    }
    return (
       <AuthContext value={UserInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;