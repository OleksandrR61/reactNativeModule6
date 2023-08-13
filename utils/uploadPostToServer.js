import { doc, setDoc } from "firebase/firestore";

import { firestore } from "../firebase/config";

export default uploadPostToServer = async post => {
    try {
        await setDoc(doc(firestore, "posts", `${post.author + Date.now() + Math.round((Math.random() * 1000000) / 1000000)}`), post);        
    } catch (error) {
        console.log(error.message);
    };
};