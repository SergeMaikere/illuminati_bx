"use client"
import React, { PropTypes, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { isLoggedIn } from '../../utils/Helper';

const Profile = ( props ) => {

    const { data, status } = useSession()
    const router = useRouter()

    useEffect( () => {if (!isLoggedIn(status)) router.push('/')}, [status] )

    return (
        <div className="flex gap-3 h-screen justify-center">
            <div className="">
                <div className="font-bold text-4xl font-mono">{props.user.name}</div>
                <div className="font-bold text-lg font-mono">{props.user.email}</div>
                <div className="flex gap-3">
                    <div className="font-serif">Likes: </div>
                    <div className="font-bold text-lg font-mono">{props.user?.comments}</div>
                </div>
            </div>
            <img src={props.user?.image} alt="User profile picture"/>
        </div>
    );
};

export default Profile;
