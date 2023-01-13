import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Nome"}
        autoFocus={true}
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={styles.input}
        placeholder={"Email"}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder={"Senha"}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity onPress={() => {}} style={styles.buttom}>
        <Text style={styles.buttomText}>Salvar</Text>
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
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4",
  },
  buttomText: {
    fontSize: 20,
    color: "#FFF",
  },
  input: {
    marginTop: 20,
    width: 40,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 15,
  },
});

export default Register;
