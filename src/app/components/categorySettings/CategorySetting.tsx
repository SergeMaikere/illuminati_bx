'use client'
import React, { PropTypes, useState } from 'react';
import UploadFiles from '../uploadFiles/uploadFiles';
import Button from '../button/Button';
import { getFormDataByObject } from '../../utils/Helper';

const CategorySetting = ({ category, handleSubmit }) => {

    const [ cat, setCat ] = useState( category )

    const saveChanges = async e => {
        e.preventDefault()
        const newCat = {
            slug: e.target.name.value.toLowerCase(),
            name: e.target.name.value,
            subtitle: e.target.subtitle.value,
            description: e.target.description.value,
            logo: getFile(e, 'logo'),
            logoAlt: getAlt(e, 'logo'),
            image: getFile(e, 'image'),
            imageAlt: getAlt(e, 'image')
        }
        const formDatas = getFormDataByObject( newCat )
        const res = await handleSubmit(formDatas, cat.id)
        updateCategoryView(e, res)
    }

    const getFile = (e, fileType) => e.target[`${fileType}${cat.name}`].files[0] || cat[fileType]
    const getAlt = (e, fileType) => e.target[`${fileType}Alt${cat.name}`].value || cat[`${fileType}Alt`]

    const updateCategoryView = (e, category) => {
        setCat( category )
        e.target[`image${category.name}`].value = ""
        e.target[`logo${category.name}`].value = ""
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
                    rows="2" 
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Sous titre..."
                    required/>
                <textarea 
                    value={cat.description}
                    name="description" 
                    rows="3"
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
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
