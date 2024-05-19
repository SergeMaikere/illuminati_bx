"use client"
import React, { PropTypes, useState } from 'react';
import classNames from 'classnames'
import { CiCirclePlus, CiImageOn, CiImport, CiVideoOn } from "react-icons/ci";
import { FcAcceptDatabase } from "react-icons/fc";

const UploadFiles = (props) => {

    const [ open, setOpen ] = useState(false)
    const [ image, setImage ] = useState(null)
    const [ video, setVideo ] = useState(null)
    const [ docu, setDocu ] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        props.handleSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-9">
            <button type="button" onClick={() => setOpen(!open)}>
                <CiCirclePlus className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
            </button>
            <div className={classNames('flex gap-3', {hidden: !open})}>
                <label htmlFor="image">
                    <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                </label>
                <input className="hidden" type="file" id="image" name="image" onChange={e => setImage(e.target.files[0])}/>
                <label htmlFor="video">
                    <CiVideoOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                </label>
                <input className="hidden" type="file" id="video" name="video" onChange={e => setVideo(e.target.files[0])}/>
                <label htmlFor="document">
                    <CiImport className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                </label>
                <input className="hidden" type="file" id="document" name="document" onChange={e => setDocu(e.target.files[0])}/>
                <button type="submit">
                    <FcAcceptDatabase className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer" />
                </button>
            </div>
        </form>
    );
};


export default UploadFiles;
