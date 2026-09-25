import { View, Text, SectionList } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import DATA from "../../../data/students.json";

const bai03 = () => {
  const getInitial = (name) => {
    return name.trim().charAt(0).toUpperCase();
  };

  const ItemView = ({ item }) => {
    const isNam = item.gioitinh === "Nam";

    return (
      <View className="h-[55px] px-[10px] flex-row items-center border-b border-[#eeeeee]">
        <View
          className="w-[27px] h-[27px] rounded-full items-center justify-center mr-[9px]"
          style={{
            backgroundColor: isNam ? "blue" : "red",
          }}
        >
          <Text className="text-white text-[12px] font-semibold">
            {getInitial(item.hovaten)}
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <Text>{item.hovaten}</Text>

          <Text>mssv: {item.maso}</Text>
        </View>

        <View
          className="px-[7px] rounded-[10px] items-center justify-center"
          style={{
            backgroundColor: isNam ? "#e8f5ff" : "#ffe8ed",
          }}
        >
          <Text
            style={{
              color: isNam ? "blue" : "red",
            }}
          >
            {item.gioitinh}
          </Text>
        </View>
      </View>
    );
  };

  const ItemHeader = ({ title, tongso }) => {
    return (
      <View className="h-[30px] px-[10px] bg-[#f1f1f1] flex-row items-center justify-between">
        <Text className="text-blue-600">
          Lớp: {title}
        </Text>

        <Text>{tongso} sinh viên</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.maso}
          renderItem={({ item }) => <ItemView item={item} />}
          renderSectionHeader={({ section }) => (
            <ItemHeader
              title={section.title}
              tongso={section.tongso}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default bai03;