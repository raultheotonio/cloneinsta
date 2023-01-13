import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { connect } from "react-redux";
import { addPost } from "../../store/actions/Posts";

const AddPhoto = ({ onAddPost, name, email }) => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState("");
  const noUser = "Você precisa estar logado para adicionar imagem";

  const pickImage = () => {
    if (!email) {
      Alert.alert("falha!", noUser);
      return;
    }

    launchCamera(
      {
        mediaType: "photo",
        maxWidth: 600,
        maxHeight: 800,
      },
      (res) => {
        if (!res.didCancel) {
          setImage(res.assets[0].uri);
        }
      }
    );
  };

  const save = async () => {
    onAddPost({
      id: Math.random(),
      nickname: name,
      email: email,
      image: image,
      commnets: [
        {
          nickname: name,
          comment: comment,
        },
      ],
    });

    setImage(null);
    setComment(null);
    navigation.navigate("Feed");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titles}>Compartilhe uma image</Text>
        <View styles={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <TouchableOpacity onPress={() => pickImage()} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentário?"
          style={styles.input}
          value={comment}
          editable={!!email}
          onChangeText={(comment) => setComment(comment)}
        />
        <TouchableOpacity onPress={() => save()} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titles: {
    fontSize: 20,
    marginTop: Platform.OS === "ios" ? 30 : 10,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "90%",
    height: Dimensions.get("window").width / 2,
    backgroundColor: "#EEE",
    marginTop: 10,
    backgroundColor: "red",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
    resizeMode: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
  input: {
    marginTop: 20,
    width: "90%",
  },
});

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
