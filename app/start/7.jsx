import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

export default function Screen7() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSaveProfile = () => {
    router.push("/start/8");
  };

  return (
    <ImageBackground
      source={require("../../assets/start/background_3.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={7} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Title */}
          <Text style={styles.headerTitle}>Profile</Text>

          {/* Mascot Circular Avatar using official avatar_ready.png */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarRing}>
              <Image
                source={require("../../assets/start/avatar_ready.png")}
                style={styles.avatarImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Full name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full name</Text>
              <TextInput
                style={styles.underlineInput}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Phone number */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone number</Text>
              <TextInput
                style={styles.underlineInput}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            {/* Birthday */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Birthday</Text>
              <TextInput
                style={styles.underlineInput}
                value={birthday}
                onChangeText={setBirthday}
                placeholder="_ / _ / _"
                placeholderTextColor="rgba(75, 85, 99, 0.6)"
              />
            </View>

            {/* OK Button */}
            <Pressable style={styles.okBtn} onPress={handleSaveProfile}>
              <Text style={styles.okBtnText}>OK</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 110,
    paddingBottom: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B243B",
    marginBottom: 20,
    textAlign: "center",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  avatarRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        boxShadow: "0px 6px 14px rgba(245, 158, 11, 0.35)",
      },
      default: {
        shadowColor: "#F59E0B",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 8,
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
  formContainer: {
    width: "100%",
    paddingHorizontal: 8,
  },
  inputGroup: {
    marginBottom: 22,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#2C344E",
    marginBottom: 2,
  },
  underlineInput: {
    height: 32,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(70, 80, 105, 0.45)",
    fontSize: 13,
    color: "#1F2937",
    paddingVertical: 2,
  },
  okBtn: {
    backgroundColor: "#131E3D",
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 32,
    marginTop: 24,
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
  okBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});
