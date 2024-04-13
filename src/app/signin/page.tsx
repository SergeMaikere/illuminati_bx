import React, { PropTypes } from 'react';

const NewUser = () => {

    const handleSubmit = async user => {
        "use server"
        const res = await addUser(user)
        console.log(res)
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Inscris toi! Allé, viens</div>
            <User handleSubmit={handleSubmit} />
        </div>

    );
};

export default NewUser;
