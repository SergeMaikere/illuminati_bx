"use client"
import { CiImageOn } from "react-icons/ci";

const UploadFiles = ( {fileType, category, image, imageAlt, setFile, setImageAlt} ) => {

    const fileId = `${fileType}${category}`
    const fileAlt = `${fileType}Alt${category}`

    return (
        <div className="flex gap-3 md:gap-9">
            <div className="flex gap-3 items-center justify-between">
                <div className="w-24 px-3">
                    <img src={image} alt={imageAlt} />
                </div>
                <div>
                    <label htmlFor={fileId}>
                        <CiImageOn className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 hover:cursor-pointer"/>
                    </label>
                    <input className="hidden" type="file" id={fileId} />
                </div>
                <input className="px-3" type="text" id={fileAlt} placeholder="Image Alt" value={imageAlt} />
            </div>
        </div>
    );
};


export default UploadFiles;
