import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Screen5() {
  return (
    <ImageBackground
      source={require("../../assets/start/background_1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={5} />

      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Welcome to Teyvat</Text>

        {/* Paimon Circular Avatar */}
        <View style={styles.avatarCard}>
          <Image
            source={require("../../assets/start/avatar_start.png")}
            style={styles.avatarImage}
            resizeMode="contain"
          />
        </View>

        {/* Caption */}
        <Text style={styles.caption}>Start exploring</Text>

        {/* S-curve path leading to the arrow */}
        <View style={styles.svgContainer}>
          <Svg width={SCREEN_WIDTH - 60} height={180} viewBox="0 0 280 180">
            <Path
              d="M 140 5 C 240 10, 270 55, 170 85 C 50 115, 30 155, 220 168"
              stroke="#2B364A"
              strokeWidth={1.6}
              fill="none"
              strokeLinecap="round"
            />
          </Svg>
        </View>

        {/* Bottom Right Arrow using arrow_1.png */}
        <Pressable
          style={styles.arrowBtn}
          onPress={() => router.push("/start/6")}
          hitSlop={15}
        >
          <Image
            source={require("../../assets/start/arrow_1.png")}
            style={styles.arrowImage}
            resizeMode="contain"
          />
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
    paddingTop: 110,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B243B",
    marginBottom: 28,
    textAlign: "center",
  },
  avatarCard: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        boxShadow: "0px 6px 12px rgba(74, 85, 104, 0.25)",
      },
      default: {
        shadowColor: "#4A5568",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
      },
    }),
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.9)",
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  caption: {
    fontSize: 12,
    color: "#2C344E",
    fontWeight: "600",
    marginTop: 14,
    marginBottom: 8,
  },
  svgContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 6,
  },
  arrowBtn: {
    position: "absolute",
    bottom: 42,
    right: 36,
    padding: 8,
  },
  arrowImage: {
    width: 38,
    height: 28,
  },
});
