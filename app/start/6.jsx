import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import { router } from "expo-router";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

export default function Screen6() {
  return (
    <ImageBackground
      source={require("../../assets/start/background_1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={6} />

      <View style={styles.container}>
        {/* Full body Paimon using official model_start.png */}
        <View style={styles.modelContainer}>
          <Image
            source={require("../../assets/start/model_start.png")}
            style={styles.modelImage}
            resizeMode="contain"
          />
        </View>

        {/* Content Box */}
        <View style={styles.contentBox}>
          <Text style={styles.title}>Complete your profile</Text>

          {/* Start Button */}
          <Pressable
            style={styles.startBtn}
            onPress={() => router.push("/start/7")}
          >
            <Text style={styles.startBtnText}>Start</Text>
          </Pressable>
        </View>

        {/* Skip button on bottom right */}
        <Pressable
          style={styles.skipBtn}
          onPress={() => router.push("/start/8")}
        >
          <Text style={styles.skipBtnText}>Skip</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 120,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  modelContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  modelImage: {
    width: 170,
    height: 250,
  },
  contentBox: {
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1B243B",
    marginBottom: 20,
    textAlign: "center",
  },
  startBtn: {
    backgroundColor: "#131E3D",
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    ...Platform.select({
      web: {
        boxShadow: "0px 2px 5px rgba(13, 21, 51, 0.25)",
      },
      default: {
        shadowColor: "#0D1533",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
      },
    }),
  },
  startBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  skipBtn: {
    position: "absolute",
    bottom: 36,
    right: 28,
    backgroundColor: "rgba(220, 225, 238, 0.75)",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  skipBtnText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
  },
});
