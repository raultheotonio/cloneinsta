import { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../store/actions/Posts";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddComment = ({ postId, onAddComment, name }) => {
  const [comment, setComment] = useState();
  const [editMode, setEditMode] = useState(false);

  const handleAddCommment = () => {
    onAddComment({
      postId: postId,
      comment: { nickname: name, comment: comment },
    });

    setComment({ comment: "", editMode: false });
  };

  const renderCommmentArea = () => (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pode comentar..."
        value={comment}
        onChangeText={(text) => setComment(text)}
        onSubmitEditing={handleAddCommment}
      />
      <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
        <Icon name="times" size={15} color={"#555"} />
      </TouchableWithoutFeedback>
    </View>
  );

  const renderShowCommentArea = () => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setEditMode(true)}
    >
      <Icon name="comment-o" size={25} color={"#555"} />
      <Text style={styles.caption}>Adicione um comentário...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {editMode ? renderCommmentArea() : renderShowCommentArea()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: "#ccc",
  },
  input: {
    width: "90%",
  },
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (payload) => dispatch(addComment(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
