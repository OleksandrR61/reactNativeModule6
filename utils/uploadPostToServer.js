import { doc, setDoc } from "firebase/firestore";

import { firestore } from "../firebase/config";

export default uploadPostToServer = async post => {
    try {
        await setDoc(doc(firestore, "posts", `${post.id}`), post);        
    } catch (error) {
        console.log(error.message);
    };
};