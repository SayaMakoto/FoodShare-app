import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export class lab02_bai01 extends Component {
  render() {
    return (
      <View className="flex-1">

        <View className="flex-[2] items-center bg-blue-500 z-10">
          <Image
            source={require("../../../assets/avatar.jpg")}
            className="absolute bottom-[-60px] max-h-32 max-w-32 rounded-full border-[5px] border-[#f1f1f1]"
          />
        </View>

        <View className="flex-[8] bg-[#f1f1f1] pt-[80px] px-[10px]">

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Họ tên:
            </Text>
            <Text className="text-[18px] font-medium">
              Đỗ Thanh Thưởng
            </Text>
          </View>

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Ngày sinh:
            </Text>
            <Text className="text-[18px] font-medium">
              12/12/2006
            </Text>
          </View>

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Điện thoại:
            </Text>
            <Text className="text-[18px] font-medium">
              0785310575
            </Text>
          </View>

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Mã sinh viên:
            </Text>
            <Text className="text-[18px] font-medium">
              2124110206
            </Text>
          </View>

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Mã lớp:
            </Text>
            <Text className="text-[18px] font-medium">
              CCQ2411F
            </Text>
          </View>

          <View className="flex-row justify-between mb-[20px]">
            <Text className="text-[18px] font-medium">
              Ngành đào tạo:
            </Text>
            <Text className="text-[18px] font-medium">
              CNTT
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

export default lab02_bai01;

