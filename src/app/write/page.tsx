"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { CiCirclePlus, CiImageOn, CiImport, CiVideoOn } from "react-icons/ci";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { Otis } from '../utils/Classics';
import { voyeur } from '../utils/Helper';
import Button from '../components/button/Button';

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

const NewPost = ({ className }) => {
    const [ open, setOpen ] = useState(true)
    const [ myButtons, setMyButtons ] = useState('flex gap-3')
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ value, setValue ] = useState('')

    const handleSubmit = () => {
        voyeur( {title, description, value} )
    }

    useEffect(
        () => {
            setMyButtons(`flex gap-3 ${open && 'hidden'}`)
        },[open]
    )

    return (
        <div className="my-10">
            <div className='flex items-center gap-3'>
                <div className="w-1/3">
                    <img src="http://localhost:3000/quill.png" alt="Old map weighted down with old camera and old compass"/>
                </div>
                <div className="flex flex-col gap-6 w-2/3">
                    <input value={title} onChange={setTitle} className="bg-transparent font-serif text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" type="text" placeholder="Titre..."/>
                    <textarea value={description} onChange={setDescription} rows="3" className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" type="text" placeholder="Sous titre..."/>
                    <textarea value={value} onChange={setValue} rows="3" className="bg-transparent font-mono text-xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" type="text" placeholder="Description..."/>
                </div>
            </div>
            <div className='flex flex-col gap-3 p-12 items-stretch'>
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
                <div className="min-h-80">
                    <ReactQuill theme="bubble" modules={modules} formats={formats} placeholder={Otis} value={value} onChange={setValue} />
                </div>
            </div>
            <div className="flex justify-center">
                <Button handleClick={handleSubmit} buttonText="Et c'est parti!" />
            </div> 
        </div>
    );
};

export default NewPost;
