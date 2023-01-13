import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gravatar } from "react-native-gravatar";
import { connect } from "react-redux";
import { logout } from "../../store/actions/user";
const Profile = ({ onLogout, name, email }) => {
  onLogoutPress = () => {
    onLogout();
  };

  const option = { name: name, email: email, secure: true };

  return (
    <View style={styles.container}>
      <Gravatar options={option} style={styles.avatar} />
      <Text style={styles.nickname}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onLogoutPress()}>
        <Text style={styles.buttonText}>sair</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  email: {
    marginTop: 20,
    fontSize: 25,
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
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
