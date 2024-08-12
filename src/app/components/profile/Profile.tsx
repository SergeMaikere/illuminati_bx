"use client"
import React, { useEffect } from 'react';
import { User } from '../../../utils/Users';
import Comment from '../comment/Comment';

const Profile = ( {user}: {user: Partial<User>} ) => {

    return (
        <div className="flex gap-3 h-screen justify-center">
            <div className="">
                <div className="font-bold text-4xl font-mono">{user.name}</div>
                <div className="font-bold text-lg font-mono">{user.email}</div>
                <div className="flex gap-3">
                    <div className="font-serif">Likes: </div>
                    <div className="font-bold text-lg font-mono">{user?.comment?.map(comm => <Comment comment={comm}/>)}</div>
                </div>
            </div>
            <img src={user?.image as string} alt="User profile picture"/>
        </div>
    );
};

export default Profile;
