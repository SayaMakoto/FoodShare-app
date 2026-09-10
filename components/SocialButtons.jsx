import React from "react";
import { StyleSheet, View, Pressable, Alert, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SocialButtons() {
  const handlePress = (provider) => {
    Alert.alert("Liên kết", `Đăng nhập qua ${provider} (Demo)`);
  };

  return (
    <View style={styles.container}>
      {/* Facebook Button */}
      <Pressable
        style={[styles.button, styles.facebookBtn]}
        onPress={() => handlePress("Facebook")}
        hitSlop={8}
      >
        <FontAwesome name="facebook-f" size={15} color="#FFFFFF" />
      </Pressable>

      {/* Google Button */}
      <Pressable
        style={[styles.button, styles.googleBtn]}
        onPress={() => handlePress("Google")}
        hitSlop={8}
      >
        <FontAwesome name="google" size={15} color="#EA4335" />
      </Pressable>

      {/* Apple Button */}
      <Pressable
        style={[styles.button, styles.appleBtn]}
        onPress={() => handlePress("Apple (iCloud)")}
        hitSlop={8}
      >
        <FontAwesome name="apple" size={16} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    marginVertical: 10,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
      },
    }),
  },
  facebookBtn: {
    backgroundColor: "#1877F2",
  },
  googleBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  appleBtn: {
    backgroundColor: "#000000",
  },
});
