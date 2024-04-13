import React, { PropTypes } from 'react';
import { CiImageOn } from 'react-icons/ci';

const User = ({ className }) => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ file, setFile ] = useState(null)

    return (
        <div className='flex items-center justify-center gap-3'>
            <div className="hidden md:block w-1/3">
                <img src="http://localhost:3000/quill.png" alt="Drawn quill"/>
            </div>
            <div className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Ton petit nom..."/>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="email" 
                    placeholder="Ton email..."/>
                <input 
                    id="image"
                    onChange={e => setFile(e.target.files[0])} 
                    className="hidden bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="file" />
                <label htmlFor="image">
                    <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
                </label>
                <button type="submit"></button>
            </div>
        </div>
    );
};

export default User;
