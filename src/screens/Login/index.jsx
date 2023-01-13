import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = ({ onLogin }) => {
  const navigation = useNavigation();
  const [name, setName] = useState("Pedrinho");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginPress = () => {
    onLogin({ name: name, email: email, password: password });
    navigation.navigate("privateNavigation");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoFocus={true}
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity onPress={onLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    width: "90%",
    height: 40,
    backgroundColor: "#EEE",
    borderWidth: 1,
    borderColor: "#333",
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch(login(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
