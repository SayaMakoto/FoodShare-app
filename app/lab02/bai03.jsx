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

const Bai03 = () => {
  const [username, setUserName] = useState("");
  const [phone, setUserPhone] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassWord] = useState("");
  const [confirmpass, setUserConfirmPass] = useState("");

  const handPress = () => {
    console.log(username);
    console.log(phone);
    console.log(email);
    console.log(password);
    console.log(confirmpass);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>ĐĂNG KÝ THÀNH VIÊN</Text>

      <View style={styles.body}>
        <TextInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUserName}
          style={styles.input}
        />
        <TextInput
          placeholder="Điện thoại"
          value={phone}
          onChangeText={setUserPhone}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setUserEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setUserPassWord}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Xác nhận mật khẩu"
          value={confirmpass}
          onChangeText={setUserConfirmPass}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.row}>
          <Text>Hiện mật khẩu</Text>
          <Switch />
        </View>
        <Pressable onPress={handPress}>
          <Text style={styles.login}>Đăng ký</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.bttext}>Đã có tài khoản?</Text>
        <Text style={styles.bttext}>Đăng nhập</Text>
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
    fontSize: 28,
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
    color: "white",
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: "flex-start"
  },
});

export default Bai03;
