import React from 'react';
import { Category, getAllCategories, updateCategory } from '../utils/Categories';
import CategorySetting from '../components/categorySettings/CategorySetting';
import { formDataToObject } from '../utils/Helper';

const SettingsPage = async () => {
    const categories = await getAllCategories()
    const saveSettings = async (formDatas: FormData, catId: string): Promise<Category> => {
        "use server"
        const newCat = formDataToObject( formDatas )
        const res = await updateCategory( newCat, catId )
        return res
    }

    return (
        <div>
            <div className="text-6xl font-serif text-center underline m-16">Settings</div>
            <div>
                {categories.map( category => <CategorySetting key={category.id} category={category} handleSubmit={saveSettings} /> )}
            </div>
        </div>
    );
};

export default SettingsPage;
