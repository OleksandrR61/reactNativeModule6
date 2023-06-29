import { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, InnerContainer, PageHeader, ProfileAvatar, BtnAdditionalImg, PostsList } from "../../../components";

import userExample from "../../../example/userExample";

import { authSignOut } from "../../../redux/auth/authOperations";

const ProfileScreen = ({navigation}) => {
    const [ user, setUser ] = useState(userExample);

    const dispatch = useDispatch();
    
    return <Container>
    <InnerContainer style={{
        paddingTop: 127,
    }}>
        <ProfileAvatar source={user.avatar} />
        <BtnAdditionalImg
            source={require('../../../assets/img/logOut.png')}
            styleBtn={{
                top: 22,
                right: 16, 
            }}
            styleImg={{
                height: 24,
                width: 24,
            }}
            onPress={() => dispatch(authSignOut())}
        />
        <PageHeader
            style={{
                fontWeight: "500",
            }}
        >
            {user.name}
        </PageHeader>
        <PostsList
            posts={[]}
            screen={"profile"}
            navigation={navigation}
        />
    </InnerContainer>
</Container>
};

export default ProfileScreen;