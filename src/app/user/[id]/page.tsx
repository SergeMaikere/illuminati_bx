import React from 'react';
import { getUserById } from '../../utils/Users';
import Profile from '../../components/profile/Profile';

type P = { params: {id: string} }

const UserProfile: React.FC<P> = async ( {params} ) => {

    const user = await getUserById( params.id )

    return (
        <Profile user={user} />
    );
};


export default UserProfile;
