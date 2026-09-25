import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Switch,
} from "react-native";

const lab02_bai02 = () => {
  const [username, setUserName] = useState("");
  const [password, setUserPassWord] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handPress = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <ImageBackground
      source={require("../../../assets/background.jpg")}
      resizeMode="cover"
      className="flex-1 w-full h-full justify-center items-center"
    >
      <Text className="text-white text-[32px] font-extrabold">ĐĂNG NHẬP</Text>

      <View className="w-[90%] bg-white my-[20px] p-[20px] rounded-[15px]">
        <TextInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUserName}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />

        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setUserPassWord}
          secureTextEntry={!showPassword}
          className="border border-gray-400 p-[10px] rounded-[7px] bg-[#f1f1f1] mb-[10px]"
        />
 
        <View className="flex-row justify-between items-center mb-[20px]">
          <Text>Hiện mật khẩu</Text>
          <Switch value={showPassword} onValueChange={setShowPassword} />
        </View>

        <Pressable onPress={handPress}>
          <Text className="text-white bg-[#007AFF] px-[30px] py-[12px] rounded-[8px] text-[16px] font-extrabold text-center">
            Đăng nhập
          </Text>
        </Pressable>
      </View>

      <View>
        <Text className="text-white mb-[10px]">Đăng ký tài khoản</Text>
        <Text className="text-white mb-[10px]">Quên mật khẩu</Text>
      </View>
    </ImageBackground>
  );
};

export default lab02_bai02;
