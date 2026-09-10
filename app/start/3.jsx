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
import SocialButtons from "../../components/SocialButtons";

export default function Screen3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    router.push("/start/4");
  };

  return (
    <ImageBackground
      source={require("../../assets/start/background_1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <StartScreenSwitcher currentScreen={3} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* MIHO Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/start/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Form */}
          <View style={styles.formCard}>
            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.underlineInput}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.underlineInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Confirm Password Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.underlineInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {/* Sign Up Button */}
            <Pressable style={styles.signUpBtn} onPress={handleSignUp}>
              <Text style={styles.signUpBtnText}>Sign Up</Text>
            </Pressable>
          </View>

          {/* Social Logins and Footer */}
          <View style={styles.socialSection}>
            <View style={styles.dividerLine} />
            <SocialButtons />
            <View style={styles.loginFooter}>
              <Text style={styles.footerPrompt}>Already have an account? </Text>
              <Pressable onPress={() => router.push("/start/2")}>
                <Text style={styles.loginLink}>Log In</Text>
              </Pressable>
            </View>
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
    paddingTop: 100,
    paddingBottom: 36,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 165,
    height: 90,
  },
  formCard: {
    width: "100%",
    paddingHorizontal: 8,
  },
  inputGroup: {
    marginBottom: 16,
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
  signUpBtn: {
    backgroundColor: "#131E3D",
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 32,
    marginTop: 16,
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
  signUpBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  socialSection: {
    alignItems: "center",
    marginTop: 16,
  },
  dividerLine: {
    width: 140,
    height: 0.8,
    backgroundColor: "rgba(100, 116, 139, 0.3)",
    marginBottom: 2,
  },
  loginFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  footerPrompt: {
    fontSize: 11,
    color: "#4B5563",
  },
  loginLink: {
    fontSize: 11,
    color: "#131E3D",
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});
