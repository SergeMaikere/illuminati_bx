import React from 'react';
import { User as MyUser, addUser } from '../utils/Users';
import User from '../components/user/User';
import { formDataToObject } from '../utils/Helper';

const NewUser = () => {

    const handleSubmit = async (formData: FormData): Promise<MyUser> => {
        "use server"
        const user: Partial<MyUser> = formDataToObject(formData)
        const res: MyUser = await addUser(user)
        return res
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Inscris <span className="text-red-800">toi!</span> Allé, <span className="text-red-800">viens</span></div>
            <User handleSubmit={handleSubmit} />
        </div>

    );
};

export default NewUser;
