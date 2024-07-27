import React from 'react';

const SelectCategory = () => {

 
    return (
        <div>
            <label htmlFor="categories" className="font-serif text-2xl hidden lg:inline-block">Choisis ta Catégorie: </label>
            <select 
                id="category" 
                className={`
                    font-bold text-xl font-mono px-2.5 pb-0.5 pt-2 
                    rounded-lg border-b border-gray-300 ml-2
                    hover:scale-110 hover:bg-zinc-800 hover:text-gray-200 focus:outline-gray-400
                `}
            >
                <option selected={true} disabled={true}>Champion</option>
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
