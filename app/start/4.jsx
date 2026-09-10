import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

export default function Screen4() {
  return (
    <ImageBackground
      source={require("../../assets/start/background_1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={4} />

      <View style={styles.centerContainer}>
        {/* Diamond Checkmark Badge */}
        <View style={styles.badgeWrapper}>
          <View style={styles.diamondSquare}>
            <View style={styles.innerCircle}>
              <Ionicons name="checkmark" size={26} color="#131E3D" />
            </View>
          </View>
          {/* Subtle bottom shadow ellipse */}
          <View style={styles.badgeShadow} />
        </View>

        {/* Greetings */}
        <Text style={styles.title}>Hello! 🐾</Text>
        <Text style={styles.subtitle}>Your account is ready to go.</Text>

        {/* Start Button */}
        <Pressable
          style={styles.startBtn}
          onPress={() => router.push("/start/5")}
        >
          <Text style={styles.startBtnText}>Start</Text>
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
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  badgeWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  diamondSquare: {
    width: 74,
    height: 74,
    borderRadius: 18,
    backgroundColor: "#354774",
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        boxShadow: "0px 4px 8px rgba(19, 30, 61, 0.3)",
      },
      default: {
        shadowColor: "#131E3D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
      },
    }),
  },
  innerCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "-45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  badgeShadow: {
    width: 70,
    height: 9,
    borderRadius: 5,
    backgroundColor: "rgba(235, 230, 215, 0.75)",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B243B",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#374151",
    fontWeight: "500",
    marginBottom: 24,
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
});
