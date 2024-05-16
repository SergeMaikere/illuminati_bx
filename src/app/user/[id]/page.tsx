import React, { PropTypes } from 'react';
import Profile from '../../components/profile/Profile';
import { getUserById } from '../../utils/Users';

const UserProfile = async ( context ) => {

    const user = await getUserById( context.params.id )

    return (
        <Profile user={user} />
    );
};


export default UserProfile;
