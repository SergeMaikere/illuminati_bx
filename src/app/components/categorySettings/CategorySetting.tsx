'use client'
import React, { PropTypes, useState } from 'react';
import UploadFiles from '../uploadFiles/uploadFiles';
import Button from '../button/Button';
import { getFormDataByObject } from '../../utils/Helper';

const CategorySetting = ({ category, handleSubmit }) => {

    const [ name, setName ] = useState(category.name)
    const [ description, setDescription ] = useState(category.description)
    const [ subtitle, setSubtitle ] = useState(category.subtitle)
    const [ image, setImage ] = useState(category.image)
    const [ imageAlt, setImageAlt ] = useState(category.imageAlt)
    const [ logo, setLogo ] = useState(category.logo)
    const [ logoAlt, setLogoAlt ] = useState(category.logoAlt)

    const saveChanges = async (obj) => {
        const newCat = {
            slug: name.toLowerCase(),
            name: name,
            subtitle: subtitle,
            description: description,
            logo: logo,
            logoAlt: logoAlt,
            image: image,
            imageAlt: imageAlt
        }
        const formDatas = getFormDataByObject( newCat )
        return handleSubmit(formDatas, category.id)
    }

    return (
        <div className="my-6 p-6">
            <div className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Titre..."
                    required/>
                <textarea 
                    value={subtitle} 
                    onChange={e => setSubtitle(e.target.value)} 
                    rows="3" 
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Sous titre..."
                    required/>
                <textarea 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    rows="3"
                    className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="text" 
                    placeholder="Description..."
                    required/>
            </div>
            <div className="flex">
                <UploadFiles 
                    image={image}
                    imageAlt={imageAlt}
                    setFile={file => setImage(file)} 
                    setImageAlt={str => setImageAlt(str)}/>
                <UploadFiles 
                    image={logo}
                    imageAlt={logoAlt}
                    setFile={file => setLogo(file)} 
                    setImageAlt={str => setLogoAlt(str)}/>
            </div>
            <Button children="Sauvegarde!" type="button" handleClick={e => saveChanges({})} />
        </div>
    );
};

export default CategorySetting;
