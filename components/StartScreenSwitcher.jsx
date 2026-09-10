import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, Platform } from "react-native";
import { router } from "expo-router";

export default function StartScreenSwitcher({ currentScreen }) {
  const [collapsed, setCollapsed] = useState(false);
  const screens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  if (collapsed) {
    return (
      <Pressable
        style={styles.collapsedBadge}
        onPress={() => setCollapsed(false)}
      >
        <Text style={styles.collapsedText}>📱 Screen {currentScreen}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>Chuyển nhanh ({currentScreen}/11):</Text>
        <Pressable onPress={() => setCollapsed(true)} hitSlop={8}>
          <Text style={styles.closeBtn}>✕</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pillsRow}
      >
        {screens.map((num) => {
          const isActive = num === currentScreen;
          return (
            <Pressable
              key={num}
              style={[
                styles.pill,
                isActive && styles.pillActive,
                num === 11 && styles.homePill,
                num === 11 && isActive && styles.homePillActive,
              ]}
              onPress={() => {
                if (num === 11) {
                  router.push("/(home)");
                } else {
                  router.push(`/start/${num}`);
                }
              }}
            >
              <Text
                style={[
                  styles.pillText,
                  isActive && styles.pillTextActive,
                  num === 11 && styles.homePillText,
                  num === 11 && isActive && styles.homePillTextActive,
                ]}
              >
                {num === 11 ? "11 🏠" : num}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 44,
    left: 14,
    right: 14,
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 999,
    ...Platform.select({
      web: {
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
      },
    }),
    borderWidth: 1,
    borderColor: "rgba(215, 222, 235, 0.8)",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4A5568",
    letterSpacing: 0.3,
  },
  closeBtn: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "800",
    paddingHorizontal: 4,
  },
  pillsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pill: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#EDF2F7",
    alignItems: "center",
    justifyContent: "center",
  },
  pillActive: {
    backgroundColor: "#131E3D",
  },
  pillText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4A5568",
  },
  pillTextActive: {
    color: "#FFFFFF",
  },
  homePill: {
    width: "auto",
    paddingHorizontal: 8,
    backgroundColor: "#E2E8F0",
  },
  homePillActive: {
    backgroundColor: "#131E3D",
  },
  homePillText: {
    color: "#2D3748",
  },
  homePillTextActive: {
    color: "#FFFFFF",
  },
  collapsedBadge: {
    position: "absolute",
    top: 48,
    right: 16,
    backgroundColor: "rgba(19, 30, 61, 0.92)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    zIndex: 999,
    elevation: 6,
  },
  collapsedText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
