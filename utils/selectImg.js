import * as DocumentPicker from 'expo-document-picker';

export default selectImg = async () => {
    try {
        const { uri } = await DocumentPicker.getDocumentAsync({
            type: "image/*",
            copyToCacheDirectory: false,
        });

        return uri;
    } catch (error) {
        console.log("Error: ", error.message);
    };
};