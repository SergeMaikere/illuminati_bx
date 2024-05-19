import React, { PropTypes } from 'react';

const SelectCategory = (props) => {

    const handleSelection = (value: string) => {
        if ( value === 'Champion' ) alert('Soyons sérieux 🙄')
        props.category(value)
    }

    return (
        <div>
            <label htmlFor="categories" className="font-serif text-2xl hidden lg:inline-block">Choisis ta Catégorie: </label>
            <select 
                id="categories" 
                name="categories"
                onChange={e => handleSelection(e.target.value)}
                className={`
                    font-bold text-xl font-mono px-2.5 pb-0.5 pt-2 
                    rounded-lg border-b border-gray-300 ml-2
                    hover:scale-110 hover:bg-zinc-800 hover:text-gray-200 focus:outline-gray-400
                `}
            >
                <option defaultValue>Champion</option>
                <option value="france">France</option>
                <option value="enfer">Enfer</option>
                <option value="science">Science</option>
                <option value="cyprien">Cyprien</option>
                <option value="histoire">Histoire</option>
                <option value="mode">Décadence</option>
            </select>
        </div>
    );
};

export default SelectCategory;
