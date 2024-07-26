import React from 'react';
import { getUserById } from '../../../app/utils/Users';
import Profile from '../../../app/components/profile/Profile';

const UserProfile = async ( context ) => {

    const user = await getUserById( context.params.id )

    return (
        <Profile user={user} />
    );
};


export default UserProfile;
