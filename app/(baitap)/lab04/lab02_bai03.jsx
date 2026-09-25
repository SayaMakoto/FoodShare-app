import React, { useState } from "react";
import {
  Text,
  View,
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
  const [showPassword, setShowPassword] = useState(false);

  const handPress = () => {
    console.log(username);
    console.log(phone);
    console.log(email);
    console.log(password);
    console.log(confirmpass);
  };

  return (
    <ImageBackground
      source={require("../../../assets/background.jpg")}
      resizeMode="cover"
      className="flex-1 w-full h-full justify-center items-center"
    >
      <Text className="text-white text-[28px] font-extrabold">
        ĐĂNG KÝ THÀNH VIÊN
      </Text>

      <View className="w-[90%] bg-white my-[20px] p-[20px] rounded-[15px]">
        <TextInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUserName}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <TextInput
          placeholder="Điện thoại"
          value={phone}
          onChangeText={setUserPhone}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setUserEmail}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setUserPassWord}
          secureTextEntry={!showPassword}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <TextInput
          placeholder="Xác nhận mật khẩu"
          value={confirmpass}
          onChangeText={setUserConfirmPass}
          secureTextEntry={!showPassword}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <View className="flex-row justify-between mb-[20px]">
          <Text>Hiện mật khẩu</Text>
          <Switch value={showPassword} onValueChange={setShowPassword} />
        </View>

        <Pressable onPress={handPress}>
          <Text className="text-white bg-[#007AFF] px-[30px] py-[12px] rounded-[8px] text-[16px] font-extrabold text-center">
            Đăng ký
          </Text>
        </Pressable>
      </View>

      <View className="self-start ml-[5%]">
        <Text className="text-white mb-[10px]">Đã có tài khoản?</Text>

        <Text className="text-white mb-[10px]">Đăng nhập</Text>
      </View>
    </ImageBackground>
  );
};

export default Bai03;
