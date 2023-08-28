import { ScrollView, StyleSheet } from "react-native";

import { CommentsListItem } from "../CommentsListItem/CommentsListItem";

export const CommentsList = ({comments}) => <ScrollView style={styles.container}>
    {comments.map(comment => <CommentsListItem
        key={comment.id}
        comment={comment}
    />)}    
</ScrollView>;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginBottom: 8,
    },
});