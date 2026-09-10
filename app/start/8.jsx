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

export default function Screen8() {
  const handleNext = () => {
    router.push("/start/9");
  };

  const handleSkip = () => {
    router.replace("/(home)");
  };

  return (
    <ImageBackground
      source={require("../../assets/start/background_3.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={8} />

      <View style={styles.container}>
        {/* Mascot inside Golden Wish Beam using official avatar_ready.png */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarGlow}>
            <Image
              source={require("../../assets/start/avatar_ready.png")}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Text Section */}
        <View style={styles.textBox}>
          <Text style={styles.title}>Your profile is ready!</Text>
          <Text style={styles.subtitle}>
            Let's explore the world of Teyvat through delicious recipes and fascinating culinary your stories!
          </Text>
        </View>

        {/* Bottom Actions matching Figma */}
        <View style={styles.footerRow}>
          {/* Skip Button on the left */}
          <Pressable style={styles.skipBtn} onPress={handleSkip}>
            <Text style={styles.skipBtnText}>Skip</Text>
          </Pressable>

          {/* Arrow on the right using official arrow_1.png */}
          <Pressable style={styles.arrowBtn} onPress={handleNext} hitSlop={15}>
            <Image
              source={require("../../assets/start/arrow_1.png")}
              style={styles.arrowImage}
              resizeMode="contain"
            />
          </Pressable>
        </View>
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
    paddingTop: 150,
    paddingBottom: 42,
    paddingHorizontal: 28,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarGlow: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        boxShadow: "0px 8px 16px rgba(245, 158, 11, 0.45)",
      },
      default: {
        shadowColor: "#F59E0B",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.45,
        shadowRadius: 12,
        elevation: 10,
      },
    }),
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.9)",
  },
  avatarImage: {
    width: 105,
    height: 105,
    borderRadius: 52,
  },
  textBox: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
    lineHeight: 19,
    fontWeight: "500",
    paddingHorizontal: 12,
  },
  footerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  skipBtn: {
    backgroundColor: "rgba(225, 220, 238, 0.75)",
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
  arrowBtn: {
    padding: 8,
  },
  arrowImage: {
    width: 38,
    height: 28,
  },
});
