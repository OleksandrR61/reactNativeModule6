import { useDispatch, useSelector } from "react-redux";

import { Container, InnerContainer, PageHeader, ProfileAvatar, BtnAdditionalImg, PostsList } from "../../../components";

import { authSignOut } from "../../../redux/auth/authOperations";

const ProfileScreen = ({navigation}) => {
    const { userAvatar, userName } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(authSignOut());
    };
    
    return <Container>
    <InnerContainer style={{
        paddingTop: 127,
    }}>
        <ProfileAvatar source={require('../../../assets/img/userExample.jpg')} />
        <PageHeader
            style={{
                fontWeight: "500",
            }}
        >
            {userName}
        </PageHeader>
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
            posts={[]}
            screen={"profile"}
            navigation={navigation}
        />
    </InnerContainer>
</Container>
};

export default ProfileScreen;