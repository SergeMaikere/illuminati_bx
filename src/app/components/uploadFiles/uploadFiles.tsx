import React from 'react';
import { CiImageOn } from "react-icons/ci";

type AppProps = {
    fileType: string
    category: string
    image: File | string
    imageAlt: string
}

const UploadFiles: React.FC<AppProps> = ({fileType, category, image, imageAlt}) => {

    const fileId = `${fileType}${category}`
    const fileAlt = `${fileType}Alt${category}`

    return (
        <div className="flex md:gap-9 gap-3 items-center justify-around">
            <div className="w-24 px-3">
                <img src={image as string} alt={imageAlt} />
            </div>
            <div>
                <label htmlFor={fileId}>
                    <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                </label>
                <input className="hidden" type="file" id={fileId} />
            </div>
            <input className="px-3 font-mono" type="text" id={fileAlt} placeholder="Image Alt" value={imageAlt} />
        </div>
    );
};


export default UploadFiles;
