import React, { PropTypes } from 'react';
import { getAllCategories, updateCategory } from '../utils/Categories';
import CategorySetting from '../components/categorySettings/CategorySetting';
import { formDataToObject } from '../utils/Helper';

const SettingsPage = async () => {
    const categories = await getAllCategories()
    const saveSettings = async (formDatas, catId) => {
        "use server"
        const newCat = formDataToObject( formDatas )
        const res = await updateCategory( newCat, catId )
        console.log(res)
    }

    return (
        <div>
            <div className="text-4xl font-serif text-center">Settings</div>
            <div>
                {categories.map( category => <CategorySetting key={category.id} category={category} handleSubmit={saveSettings} /> )}
            </div>
        </div>
    );
};

export default SettingsPage;
