import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { PostsContainer, PostsUser, PostsList } from "../../../components";
import { firestore } from "../../../firebase/config";

const PostsScreen = ({route, navigation}) => {
    const { userId, userName, userEmail, userAvatar } = useSelector(({auth}) => auth);
    const [ posts, setPosts ] = useState([]);

    const getAllPost = () => {
        const offSnapshot = onSnapshot(collection(firestore, "posts"), data => {
            setPosts(data.docs.map(doc => doc.data()));
        });

        return () => offSnapshot();
    };

    useEffect(() => {
        const offSnapshot = getAllPost();
        
        return () => offSnapshot();
    }, []);

    return <PostsContainer>
        <PostsUser
            user={{
                name: userName,
                email: userEmail,
                avatar: require('../../../assets/img/userExample.jpg'),
            }}
        />
        <PostsList
            posts={posts}
            screen={"posts"}
            style={{paddingHorizontal: 0}}
            navigation={navigation}
        />
    </PostsContainer>
};

export default PostsScreen;