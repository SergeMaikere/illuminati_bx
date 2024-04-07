"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { CiCirclePlus, CiImageOn, CiImport, CiVideoOn } from "react-icons/ci";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { Otis } from '../../utils/Classics';
import Button from '../button/Button';
import NoYouCannot from '../noYouCannot/NoYouCannot';
import { isAdmin } from '../../utils/Helper';

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link' ]


const Article = (props) => {

    const [ open, setOpen ] = useState(true)
    const [ myButtons, setMyButtons ] = useState('flex gap-3')
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ subtitle, setSubtitle ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ article, setArticle ] = useState('')
    const { data, status } = useSession()

    useEffect(
        () => {
            setMyButtons(`flex gap-3 ${open && 'hidden'}`)
        },[open]
    )

    return (
        !isAdmin(status, data) ? <NoYouCannot /> :
        <div>
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
                        placeholder="Titre..."/>
                    <textarea 
                        value={subtitle} 
                        onChange={e => setSubtitle(e.target.value)} 
                        rows="3" 
                        className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                        type="text" 
                        placeholder="Sous titre..."/>
                    <textarea 
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                        rows="3"
                        className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                        type="text" 
                        placeholder="Description..."/>
                </div>
            </div>   
            <div className='flex flex-col gap-3 mt-9 p-6 md:p-12'>
                <div className="min-h-64 md:min-h-80 border-b border-gray-300 rounded">
                    <ReactQuill theme="bubble" modules={modules} formats={formats} placeholder={Otis} value={article} onChange={setArticle} />
                </div>
                <div className="flex justify-around">
                    <div className="flex gap-9">
                        <button type="button" onClick={() => setOpen(!open)}>
                            <CiCirclePlus className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
                        </button>
                        <div className={myButtons}>
                            <button type="button">
                                <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
                            </button>
                            <button type="button">
                                <CiImport className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
                            </button>
                            <button type="button">
                                <CiVideoOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="categories" className="font-serif text-2xl">Choisis ta Catégorie: </label>
                        <select 
                            id="categories"
                            onChange={e => setCategory(e.value)}
                            className={`
                                font-bold text-xl font-mono px-2.5 pb-0.5 pt-2 
                                rounded-lg border-b border-gray-300 ml-2
                                hover:scale-110 hover:bg-zinc-800 hover:text-gray-200 focus:outline-gray-400
                            `}>
                            <option selected>Champion</option>
                            <option value="france">France</option>
                            <option value="enfer">Enfer</option>
                            <option value="science">Science</option>
                            <option value="cyprien">Cyprien</option>
                            <option value="histoire">Histoire</option>
                            <option value="mode">Décadence</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <Button handleClick={props.handleSubmit} buttonText="Et c'est parti!" />
            </div>             
        </div>
    );
};

export default Article;
