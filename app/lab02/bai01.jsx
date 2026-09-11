import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export class lab01 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.col}>Họ tên: </Text>
            <Text style={styles.col}>Đỗ Thanh Thưởng</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>Ngày sinh: </Text>
            <Text style={styles.col}>12/12/2006</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>Điện thoại: </Text>
            <Text style={styles.col}>0785310575</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>Mã sinh viên: </Text>
            <Text style={styles.col}>2124110206</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>Mã lớp: </Text>
            <Text style={styles.col}>CCQ2411F</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>Ngành đào tạo: </Text>
            <Text style={styles.col}>CNTT</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "blue",
    flex: 2,
    alignItems: "center",
    zIndex: 1,
  },

  avatar: {
    height: 120,
    width: 120,
    borderRadius: "50%",
    borderColor: "#f1f1f1",
    borderWidth: 5,
    position: "absolute",
    bottom: -60,
  },

  body: {
    backgroundColor: "#f1f1f1",
    flex: 8,  
    paddingTop: 80,
    paddingHorizontal: 10
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }, 
  col: {
    fontSize: 18,
    fontWeight: 500
  }
});

export default lab01;
