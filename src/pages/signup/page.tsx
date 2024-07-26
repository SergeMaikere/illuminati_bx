import React from 'react';
import { User as myUser, addUser } from '../../app/utils/Users';
import User from '../../app/components/user/User';

const NewUser = () => {

    const handleSubmit = async formData => {
        "use server"
        const user = [ ...formData.entries() ].reduce(
            (user, pair) => {
                user[pair[0]] = pair[1]
                return user
            }, {}
        )
        const result = await addUser(user)
        console.log({result})
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Inscris <span className="text-red-800">toi!</span> Allé, <span className="text-red-800">viens</span></div>
            <User handleSubmit={handleSubmit} />
        </div>

    );
};

export default NewUser;
