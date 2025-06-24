import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
    let{profileData}=use(AuthContext);
    // console.log(profileData);
    return (
        <div>
            <h1>{profileData?.displayName}</h1>
            <h1>{profileData?.photoURL}</h1>
        </div>
    );
};

export default Profile;