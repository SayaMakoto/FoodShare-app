import React, { useEffect } from "react";
import { StyleSheet, View, Image, Pressable, StatusBar } from "react-native";
import { router } from "expo-router";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

export default function Screen1() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/start/2");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Pressable style={styles.container} onPress={() => router.push("/start/2")}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <StartScreenSwitcher currentScreen={1} />

      <View style={styles.centerBox}>
        <Image
          source={require("../../assets/start/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 220,
    height: 140,
  },
});
