import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { app } from './firebase';
import { isString } from './Validation';
import { Category } from './Categories';

const storageCloud = async (file: File ): Promise<string> => {
    try{
        const storage =  getStorage(app)
        const storageRef = ref(storage, `images/${new Date().getTime()}${file.name}`)
        const snapshot = await uploadBytes(storageRef, file)
        return await getDownloadURL(snapshot.ref)
    }
    catch (err) {
        throw new Error("Couldn't store the picture")
    }
}

export const getImgUrl = async (obj: Partial<Category>): Promise<Partial<Category>>  => {
    if ( !obj.image ) return { ...obj, image: process.env.DEFAULT_PP }
    if ( isString(obj) ) return obj
    const url = await storageCloud(obj.image)
    return { ...obj, image: url }
}

export const getLogoUrl = async (obj: Partial<Category>): Promise<Partial<Category>>  => {
    if ( isString(obj) ) return obj
    const url = await storageCloud(obj.logo)
    return { ...obj, logo: url }
}