import React from 'react';
import { Category, getAllCategories, updateCategory } from '../../app/utils/Categories';
import { formDataToObject } from '../../app/utils/Helper';
import CategorySetting from '../../app/components/categorySettings/CategorySetting';

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
            <div className="text-4xl md:text-6xl font-serif text-center underline my-8 md:my-16">Settings</div>
            <div className="flex flex-col gap-9 items-center">
                {categories.map( category => <CategorySetting key={category.id} category={category} handleSubmit={saveSettings} /> )}
            </div>
        </div>
    );
};

export default SettingsPage;
