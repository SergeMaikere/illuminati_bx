"use client"
import React, { PropTypes, useState } from 'react';
import classNames from 'classnames'
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { FcAcceptDatabase } from "react-icons/fc";
import { isString } from '../../utils/Validation';

const UploadFiles = ( {image, imageAlt, setFile, setImageAlt} ) => {

    
    return (
        <div className="flex gap-3 md:gap-9">
            <div className="flex gap-3 items-center justify-between">
                <div className="w-24 px-3">
                    <img src={image} alt={imageAlt} />
                </div>
                <div>
                    <label htmlFor="image">
                        <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                    </label>
                    <input className="hidden" type="file" id="image" onChange={e => setFile(e.target.files[0])}/>
                </div>
                <input className="px-3" type="text" name="imageAlt" placeholder="Image Alt" value={imageAlt} onChange={e => setImageAlt(e.target.value)}/>
            </div>
        </div>
    );
};


export default UploadFiles;
