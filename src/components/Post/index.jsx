import { Dimensions, Image, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import AddComment from "../AddComment";
import { Author } from "../Author";
import { Comments } from "../Comments";
const Post = ({ id, image, comments, email, nickname, name }) => {
  const handleCommment = () => !!email && <AddComment postId={id} />;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      {handleCommment()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    with: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  };
};

export default connect(mapStateToProps)(Post);
