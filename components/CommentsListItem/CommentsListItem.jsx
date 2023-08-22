import { useSelector } from "react-redux";
import { Text, View, StyleSheet, Image } from "react-native";

export const CommentsListItem = ({comment}) => {
    const { userId } = useSelector(({auth}) => auth);

    const isOwn = userId === comment.author;
        
    return <View
        style={{...styles.container, flexDirection: isOwn ? "row-reverse" : "row"}}
    >
        <Image
            source={{uri: comment.authorAvatar}}
            style={{...styles.avatar, marginRight: isOwn ? 0 : 16, marginLeft: isOwn ? 16 : 0}}
        />
        <View
            style={{...styles.innerContainer,
                borderTopLeftRadius: isOwn ? 6 : 0,
                borderTopRightRadius: isOwn ? 0 : 6,
            }}
        >
            <Text style={styles.comment}>{comment.text}</Text>
            <Text style={{...styles.date, textAlign: isOwn ? "left" : "right"}}>{comment.date}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    avatar: {
        height: 28,
        width: 28,
        borderRadius: 14,
        overflow: "hidden",
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderRadius: 6,
        borderTopLeftRadius: 0,
    },
    comment: {
        marginBottom: 8,
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 18,
        color: "#212121",
    },
    date: {
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 12,
        color: "#BDBDBD",
    },
});