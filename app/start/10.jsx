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

export default function Screen10() {
  const handleNext = () => {
    router.replace("/(home)");
  };

  return (
    <ImageBackground
      source={require("../../assets/start/background_4.png")}
      style={styles.background}
      imageStyle={styles.backgroundImageFlipped}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={10} />

      <View style={styles.container}>
        {/* Center Text Section */}
        <View style={styles.centerCard}>
          <Text style={styles.title}>Save what{"\n"}you like!</Text>
          <Text style={styles.subtitle}>
            Bookmark your favorite articles, follow your preferred authors,
            and get notified whenever new content is available.
          </Text>
        </View>

        {/* Bottom Actions */}
        <View style={styles.footerRow}>
          <View />
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
  backgroundImageFlipped: {
    transform: [{ rotate: "180deg" }],
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
    paddingHorizontal: 12,
  },
  footerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 6,
  },
  arrowBtn: {
    padding: 8,
  },
  arrowImage: {
    width: 38,
    height: 28,
  },
});
