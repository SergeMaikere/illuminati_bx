'use client'
import React, { useState } from 'react';
import UploadFiles from '../uploadFiles/uploadFiles';
import Button from '../button/Button';
import { getFormDataByObject } from '../../utils/Helper';
import { Category } from '../../utils/Categories';

type AppProps = {
    category: Category
    handleSubmit: Function
}

const CategorySetting = ({ category, handleSubmit }: AppProps) => {

    const [ cat, setCat ] = useState<Category>( category )

    const saveChanges = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & Record<keyof Category, {value: string}>

        const newCat: Omit<Category, "id" | "posts"> = {
            slug: target.name.value.toLowerCase(),
            name: target.name.value,
            subtitle: target.subtitle.value,
            description: target.description.value,
            logo: getFile(target, 'logo'),
            logoAlt: getAlt(target, 'logo'),
            image: getFile(target, 'image'),
            imageAlt: getAlt(target, 'image')
        }
        const formDatas = getFormDataByObject( newCat )
        const res = await handleSubmit(formDatas, cat.id)
        updateCategoryView(target, res)
    }

    const getFile = (target: any, fileType: string): File | string => target[`${fileType}${cat.name}`].files[0] || cat[fileType as keyof Category]
    const getAlt = (target: any, fileType: string): string => target[`${fileType}Alt${cat.name}`].value || cat[`${fileType}Alt` as keyof Category]

    const updateCategoryView = (target: any, category: Category): void => {
        setCat( category )
        target[`image${category.name}`].value = ""
        target[`logo${category.name}`].value = ""
    }

    return (
        <form onSubmit={saveChanges} className="my-6 p-6">
            <div className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                <input 
                    value={cat.name}
                    name="name" 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Nom..."
                    onChange={ e => setCat(prev => ({...prev, name: e.target.value })) }
                    required/>
                <textarea 
                    value={cat.subtitle}
                    name="subtitle" 
                    rows={2} 
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    placeholder="Sous titre..."
                    required/>
                <textarea 
                    value={cat.description}
                    name="description" 
                    rows={3}
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    placeholder="Description..."
                    required/>
            </div>
            <div className="flex">
                <UploadFiles 
                    fileType="image"
                    category={cat.name}
                    image={cat.image}
                    imageAlt={cat.imageAlt} />
                <UploadFiles 
                    fileType="logo"
                    category={cat.name}
                    image={cat.logo}
                    imageAlt={cat.logoAlt} />
            </div>
            <Button children="Sauvegarde!" type="submit" />
        </form>
    );
};

export default CategorySetting;
