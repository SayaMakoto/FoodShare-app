import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DATA from "../../../data/students.json";

const bai03 = () => {
  const getInitial = (name) => {
    return name.trim().charAt(0).toUpperCase();
  };

  const ItemView = ({ item }) => {
    const isNam = item.gioitinh === "Nam";

    return (
      <View style={styles.item}>
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: isNam ? "blue" : "red",
            },
          ]}
        >
          <Text style={styles.avatarText}>{getInitial(item.hovaten)}</Text>
        </View>

        <View style={styles.info}>
          <Text>{item.hovaten}</Text>

          <Text>mssv: {item.maso}</Text>
        </View>

        <View
          style={[
            styles.genderBadge,
            {
              backgroundColor: isNam ? "#e8f5ff" : "#ffe8ed",
            },
          ]}
        >
          <Text
            style={[
              styles.genderText,
              {
                color: isNam ? "blue" : "red",
              },
            ]}
          >
            {item.gioitinh}
          </Text>
        </View>
      </View>
    );
  };

  const ItemHeader = ({ title, tongso }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style = {{color: "blue"}}>Lớp: {title}</Text>

        <Text>{tongso} sinh viên</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.maso}
          renderItem={({ item }) => <ItemView item={item} />}
          renderSectionHeader={({ section }) => (
            <ItemHeader title={section.title} tongso={section.tongso} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sectionHeader: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  item: {
    height: 55,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  avatar: {
    width: 27,
    height: 27,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  avatarText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  genderBadge: {
    paddingHorizontal: 7,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default bai03;
