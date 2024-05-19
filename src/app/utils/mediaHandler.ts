import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { app } from './firebase';

const storageCloud = async (file) => {
    const storage =  getStorage(app)
    const storageRef = ref(storage, `images/${new Date().getTime()}${file.name}`)
    const snapshot = await uploadBytes(storageRef, file)
    return await getDownloadURL(snapshot.ref)
}

export const getImgUrl = async (obj: any): any => {
    if ( obj.image === undefined ) return { ...obj, image: process.env.DEFAULT_PP }
    const url = await storageCloud(obj.image)
    return { ...obj, image: url }
}