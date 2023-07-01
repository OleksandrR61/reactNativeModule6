import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { PostsContainer, PostsUser, PostsList } from "../../../components";

const PostsScreen = ({route, navigation}) => {
    const { userId, userName, userEmail, userAvatar } = useSelector(({auth}) => auth);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        if (route.params?.post) {
            setPosts(posts => [...posts, {
                ...route.params.post,
                id: userId + Date.now().toString(),
                comments: [],
                likes: 0,
            }]);
        };        
    }, []);
    
    return <PostsContainer>
        <PostsUser user={{name: userName, email: userEmail, avatar: userAvatar}} />
        <PostsList
            posts={posts}
            screen={"posts"}
            style={{paddingHorizontal: 0}}
            navigation={navigation}
        />
    </PostsContainer>
};
console.log(posts)

export default PostsScreen;