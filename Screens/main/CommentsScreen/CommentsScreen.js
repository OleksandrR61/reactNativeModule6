import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, TouchableOpacity, Keyboard, ImageBackground, Text } from "react-native";
import { doc, onSnapshot } from "firebase/firestore";

import { PostsContainer, PostImage, CommentsList, FormInput } from "../../../components/";
import { uploadCommentToServer } from "../../../firebase/api";
import { firestore } from "../../../firebase/config";

const MONTHS = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

const CommentsScreen = ({route}) => {
    const [ comments, setComments ] = useState([]);
    const [ text, setText ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const { userId } = useSelector(({auth}) => auth);
    
    const handlePress = async () => {
        if (text){
            Keyboard.dismiss();

            setIsLoading(true);

            const dateNow = new Date();
            
            await uploadCommentToServer({
                id: `${userId + Date.now()}`,
                author: userId,
                text,
                date: `${dateNow.getDate() + 1} ${MONTHS[dateNow.getMonth()]}, ${dateNow.getFullYear()} | ${dateNow.getHours()}:${dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()}`
            }, route.params.postId);

            setText("");
            setIsLoading(false);
        };
    };

    const getComments = () => {
        const offSnapshot = onSnapshot(doc(firestore, "posts", route.params.postId), doc => {
            setComments(doc.data().comments);
        });

        return () => offSnapshot();
    };

    useEffect(() => {
        const offSnapshot = getComments();
        
        return () => offSnapshot();
    }, []);

    return <PostsContainer>
        <PostImage
            source={route.params.img}
        />
        <CommentsList comments={comments} />
        {
            isLoading
                ? <View
                    style={{
                        alignItems: 'center',
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 100,
                        marginBottom: 16,
                    }}
                >
                    <Text
                        style={{
                            color: "#BDBDBD",
                        }}
                    >
                        Очікуйте...
                    </Text>
                </View>
                : <View style={{position: "relative"}}>
                    <FormInput
                        placeholder={"Коментувати..."}
                        value={text}
                        onChangeText={setText}
                        onEndEditing={handlePress}
                        style={{
                            borderRadius: 100,
                            fontFamily: "Inter-Medium",
                            fontWeight: "500",
                            paddingRight: 50,
                        }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handlePress}
                        style={{
                            flex:1,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 34,
                            width: 34,
                            borderRadius: 17,
                            backgroundColor: "#FF6C00",
                            position: "absolute",
                            top: 8,
                            right: 8,
                        }}
                    >
                        <ImageBackground
                            source={require('../../../assets/img/vector.png')}
                            style={{
                                width: 10,
                                height: 14,
                            }}
                        />
                    </TouchableOpacity>
                </View>
        }
    </PostsContainer>;
};

export default CommentsScreen;