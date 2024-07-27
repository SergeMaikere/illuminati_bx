"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'
import Button from '../button/Button';
import NoYouCannot from '../noYouCannot/NoYouCannot';
import UploadFiles from '../uploadFiles/uploadFiles';
import SelectCategory from '../selectCategory/SelectCategory';
import TextEditor from '../textEditor/TextEditor';
import classNames from 'classnames'
import { isWriter, getFormDataByObject } from '../../utils/Helper';
import { Otis } from '../../utils/Classics';

type H = { handleSubmit: Function }

type P = {
    title: {value: string}
    subtitle: {value: string}
    description: {value: string}
    category: {value: string}
    imageNew: {value: File}
    imageAltNew: {value: string}
}

const Article: React.FC<H> = ({handleSubmit}) => {

    // const [ title, setTitle ] = useState('')
    // const [ description, setDescription ] = useState('')
    // const [ subtitle, setSubtitle ] = useState('')
    // const [ category, setCategory ] = useState('')
    // const [ files, setFiles ] = useState(null)
    // const [ imageAlt, setImageAlt ] = useState('nice pic')
    const { data, status } = useSession()
    const [ body, setBody ] = useState(Otis)

    const handleNewPostSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & P
        const postDatas = {
            title: target.title.value,
            subtitle: target.subtitle.value,
            description: target.description.value,
            body: body,
            catSlug: target.category.value,
            image: target.imageNew.value,
            imageAlt: target.imageAltNew.value,
            userEmail: data?.user?.email
        }
        const formDatas = getFormDataByObject( postDatas )
        handleSubmit( formDatas )
    }

    return (
        <div>
            <div className={classNames({hidden: isWriter(status, data)})}>
                <NoYouCannot />
            </div>
            <form onSubmit={e => handleNewPostSubmit(e)} className={classNames({hidden: !isWriter(status, data)})}>
                <div className='flex items-center justify-center gap-3'>
                    <div className="hidden md:block w-1/3">
                        <img src="http://localhost:3000/quill.png" alt="Old map weighted down with old camera and old compass"/>
                    </div>
                    <div className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                        <input 
                            name="title" 
                            className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                            type="text" 
                            placeholder="Titre..."
                            required/>
                        <textarea 
                            name="subtitle"
                            rows={3} 
                            className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                            placeholder="Sous titre..."
                            required/>
                        <textarea 
                            name="description"
                            rows={3}
                            className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                            placeholder="Description..."
                            required/>
                    </div>
                </div>   
                <div className='flex flex-col gap-3 mt-9 p-6 md:p-12'>
                    <div className="min-h-64 md:min-h-80 border-b border-gray-300 rounded">
                        <TextEditor value={body} handleChange={setBody} />
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between"> 
                        <UploadFiles fileType="image" category="New" image="" imageAlt="" />
                        <SelectCategory />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button type="submit" children="Et c'est parti!" />
                </div>             
            </form>
        </div>
    );
};

export default Article;
