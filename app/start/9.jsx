import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

export default function Screen9() {
  const handleNext = () => {
    router.push("/start/10");
  };

  const handleSkip = () => {
    router.replace("/(home)");
  };

  return (
    <ImageBackground
      source={require("../../assets/start/background_4.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={9} />

      <View style={styles.container}>
        {/* Center Text Section */}
        <View style={styles.centerCard}>
          <Text style={styles.title}>Personalize your{"\n"}experience</Text>
          <Text style={styles.subtitle}>
            Choose your favourite topics such as dishes, recipes, restaurant,
            or regions of Teyvat - to recommend tailored just for you.
          </Text>
        </View>

        {/* Bottom Actions */}
        <View style={styles.footerRow}>
          {/* Skip Button */}
          <Pressable style={styles.skipBtn} onPress={handleSkip}>
            <Text style={styles.skipBtnText}>Skip</Text>
          </Pressable>

          {/* Next Button */}
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 42,
    paddingHorizontal: 28,
  },
  centerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#131E3D",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 12,
    color: "#2E374D",
    textAlign: "center",
    lineHeight: 19,
    fontWeight: "500",
    paddingHorizontal: 10,
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
