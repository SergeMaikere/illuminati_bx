import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { app } from './firebase';
import { isString } from './Validation';
import { Category } from './Categories';
import { User } from './Users';
import { Post } from './Posts';

type T = Partial<Category> | Partial<User> |Partial<Post>

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

export const getImgUrl = async (obj: T): Promise<T>  => {
    if ( !obj.image ) return { ...obj, image: process.env.DEFAULT_PP }
    if ( isString(obj.image) ) return obj
    const url = await storageCloud(obj.image as File)
    return { ...obj, image: url }
}

export const getLogoUrl = async (obj: Partial<Category>): Promise<T>  => {
    if ( isString(obj.logo) ) return obj
    const url = await storageCloud(obj.logo as File)
    return { ...obj, logo: url }
}