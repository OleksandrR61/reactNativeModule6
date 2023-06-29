import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '../firebase/config';

export default uploadToServer = async (img, folder) => {
    try {
        const response = await fetch(img);
        const file = await response.blob();

        const storageRef = ref(storage, `${folder}/${Date.now().toString()}`);
        await uploadBytes(storageRef, file);

        return await getDownloadURL(storageRef);
    } catch (error) {
        console.log(error.message);
    };
};