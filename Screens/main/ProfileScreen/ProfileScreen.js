import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Text } from "react-native";

import { Container, InnerContainer, PageHeader, ProfileAvatar, BtnAdditionalImg, PostsList } from "../../../components";

import { authSignOut } from "../../../redux/auth/authOperations";
import { firestore } from "../../../firebase/config";

const ProfileScreen = ({route, navigation}) => {
    const [ posts, setPosts ] = useState([]);
    
    const { userAvatar, userName, userId } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(authSignOut());
    };

    const getUserPosts = () => {
        const offSnapshot = onSnapshot(query(collection(firestore, "posts"), where("author", "==", userId)), data => {
            setPosts(data.docs.map(doc => doc.data()));
        });

        return () => offSnapshot();
    };

    useEffect(() => {
        let offSnapshot = () => {}
        if (userId) {
            offSnapshot = getUserPosts();
        };
        
        return () => offSnapshot();
    }, [userId]);
    
    return <Container>
    <InnerContainer style={{
        paddingTop: 127,
    }}>
        <PageHeader
            style={{
                fontWeight: "500",
            }}
        >
            {userName}
        </PageHeader>
        <ProfileAvatar source={userAvatar} />
        <BtnAdditionalImg
            source={require('../../../assets/img/logOut.png')}
            onPress={logOut}
            styleBtn={{
                top: 22,
                right: 16,
            }}
            styleImg={{
                height: 24,
                width: 24,
            }}
        />
        <PostsList
            posts={posts}
            screen={"profile"}
            navigation={navigation}
        />
    </InnerContainer>
</Container>
};

export default ProfileScreen;