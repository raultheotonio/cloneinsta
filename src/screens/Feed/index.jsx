import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

const Feed = ({ posts }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#F5FCFF",
  },
});

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
  };
};
export default connect(mapStateToProps)(Feed);
