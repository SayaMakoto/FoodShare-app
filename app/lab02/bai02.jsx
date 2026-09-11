import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Switch,
} from "react-native";

const Bai02 = () => {
  const [username, setUserName] = useState("");
  const [password, setUserPassWord] = useState("");

  const handPress = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>ĐĂNG NHẬP</Text>

      <View style={styles.body}>
        <TextInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUserName}
          style={styles.input}
        />
        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setUserPassWord}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.row}>
          <Text>Hiện mật khẩu</Text>
          <Switch />
        </View>
        <Pressable onPress={handPress}>
          <Text style={styles.login}>Đăng nhập</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.bttext}>Đăng ký tài khoản</Text>
        <Text style={styles.bttext}>Quên mật khẩu</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "800",
  },

  body: {
    width: "90%",
    backgroundColor: "white",
    marginVertical: 20,
    padding: 20,
    borderRadius: 15,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
  },

  login: {
    color: "white",
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 800,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  bttext: {
    color: 'white',
    marginBottom: 10,
    // justifyContent: "left",
    // alignItems: "left"
  }
});

export default Bai02;
