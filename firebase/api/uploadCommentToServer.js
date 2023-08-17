import { doc, updateDoc, arrayUnion } from "firebase/firestore";

import { firestore } from "../config";

export default uploadCommentToServer = async (comment, postId) => {
    try {
        await updateDoc(doc(firestore, "posts", `${postId}`), {
            comments: arrayUnion(comment),
        });        
    } catch (error) {
        console.log(error.message);
    };
};