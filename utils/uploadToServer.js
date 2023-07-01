import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '../firebase/config';

export default uploadToServer = async (img, folder) => {
    try {
        const response = await fetch(img);
        const file = await response.blob();
        const filePath = `${folder}/${Math.floor(Math.random() * 1000000) + Date.now().toString()}`;

        const storageRef = ref(storage, filePath);
        await uploadBytes(storageRef, file);

        return await getDownloadURL(storageRef);        
    } catch (error) {
        console.log(error.message);
    };
};