import { useSelector } from "react-redux";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import { BtnAdditionalImg } from "../BtnAdditionalImg/BtnAdditionalImg";
import { selectImg } from "../../utils";

export const ProfileAvatar = ({source, onPress}) => {
    const { userId } = useSelector(({auth}) => auth);

    return <View style={styles.container}>
        {userId
            ? <Image
                source={{uri: source}}
                style={styles.avatar}
            />
            : <>
                <TouchableOpacity onPress={async () => onPress(await selectImg())}>
                    <Image
                        source={{uri: source}}
                        style={styles.avatar}
                    />
                </TouchableOpacity>
                <BtnAdditionalImg
                    source={require('../../assets/img/union.png')}
                    styleBtn={styles.button}
                    styleImg={styles.byttonImg}
                    onPress={()=>handlePress(null)}
                />
            </>
        }
    </View>
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: -60,
        width: 120,
        alignSelf: "center",
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 16,
        overflow: "hidden",
        alignSelf: "center",
        resizeMode: "cover",
        backgroundColor: "#F6F6F6",
    },
    button: {
        backgroundColor: "#FFFFFF",
        height: 25,
        width: 25,
        borderRadius: 25,
        right: -13,
        bottom: 9,
    },
    byttonImg: {
        height: 13,
        width: 13,
    },
});