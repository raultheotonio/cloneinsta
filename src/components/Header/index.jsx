import { Image, Platform, StyleSheet, Text, View } from "react-native";
import icon from "../../../assets/imgs/icon.png";
import { connect } from "react-redux";
import { Gravatar } from "react-native-gravatar";

const Header = ({ name, email }) => {
  const renderAvatar = () =>
    email && (
      <View styles={styles.userContainer}>
        <Text style={styles.user}>{name}</Text>
        <Gravatar
          options={{ email: email, secure: true }}
          style={styles.avatar}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      {renderAvatar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  title: {
    color: "#000",
    fontFamily: "shelter",
    height: 30,
    fontSize: 28,
  },
  user: {
    fontSize: 10,
    color: "#888",
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  };
};

export default connect(mapStateToProps)(Header);
