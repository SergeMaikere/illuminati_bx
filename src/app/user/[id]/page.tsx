import React from 'react';
import { getUserById } from '../../utils/Users';
import Profile from '../../components/profile/Profile';

const UserProfile = async ( context ) => {

    const user = await getUserById( context.params.id )

    return (
        <Profile user={user} />
    );
};


export default UserProfile;
