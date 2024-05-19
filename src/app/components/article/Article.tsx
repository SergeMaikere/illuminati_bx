"use client"
import React, { PropTypes, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { CiCirclePlus, CiImageOn, CiImport, CiVideoOn } from "react-icons/ci";
import Button from '../button/Button';
import NoYouCannot from '../noYouCannot/NoYouCannot';
import UploadFiles from '../uploadFiles/uploadFiles';
import SelectCategory from '../selectCategory/SelectCategory';
import TextEditor from '../textEditor/TextEditor';
import classNames from 'classnames'
import { isWriter, slugify } from '../../utils/Helper';
import { Otis } from '../../utils/Classics';

const Article = (props) => {

    const { data, status } = useSession()
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ subtitle, setSubtitle ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ imageAlt, setImageAlt ] = useState('nice pic')
    const [ body, setBody ] = useState(Otis)
    const [ files, setFiles ] = useState(null)

    const router = useRouter()

    const handleSubmit = () => {
        if ( !files ) return alert('Met une image au moins!')
        const postDatas = {
            title: title,
            subtitle: subtitle,
            description: description,
            body: body,
            catSlug: category,
            imageAlt: imageAlt,
            files: files,
            userEmail: data.user.email
        }
        props.handleSubmit( postDatas )
        router.push( `/${slugify(title)}` )
    }

    return (
        <div>
            <div className={classNames({hidden: isWriter(status, data)})}>
                <NoYouCannot />
            </div>
            <div className={classNames({hidden: !isWriter(status, data)})}>
                <div className='flex items-center justify-center gap-3'>
                    <div className="hidden md:block w-1/3">
                        <img src="http://localhost:3000/quill.png" alt="Old map weighted down with old camera and old compass"/>
                    </div>
                    <div className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                        <input 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
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
                </div>   
                <div className='flex flex-col gap-3 mt-9 p-6 md:p-12'>
                    <div className="min-h-64 md:min-h-80 border-b border-gray-300 rounded">
                        <TextEditor value={body} handleChange={setBody} />
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between"> 
                        <UploadFiles handleSubmit={files => setFiles(files)} />
                        <SelectCategory category={cat => setCategory(cat)} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button handleClick={() => handleSubmit()} children="Et c'est parti!" />
                </div>             
            </div>
        </div>
    );
};

export default Article;
