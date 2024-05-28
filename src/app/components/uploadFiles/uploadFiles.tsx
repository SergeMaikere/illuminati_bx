"use client"
import React, { PropTypes, useState } from 'react';
import classNames from 'classnames'
import { CiCirclePlus, CiImageOn, CiImport, CiVideoOn } from "react-icons/ci";
import { FcAcceptDatabase } from "react-icons/fc";

const UploadFiles = (props) => {

    const [ open, setOpen ] = useState(false)
    
    return (
        <div className="flex gap-3 md:gap-9">
            <button type="button" onClick={() => setOpen(!open)}>
                <CiCirclePlus className="w-10 h-10 md:w-12 md:h-12 hover:scale-110"/>
            </button>
            <div className={classNames('flex gap-3 justify-between', {hidden: !open})}>
                <div>
                    <label htmlFor="image">
                        <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                    </label>
                    <input className="hidden" type="file" id="image" name="image" onChange={e => props.setImage(e.target.files[0])}/>
                </div>
                <input className="px-3" type="text" name="imageAlt" placeholder="Image Alt" onChange={e => props.setImageAlt(e.target.value)}/>
            </div>
        </div>
    );
};


export default UploadFiles;
