import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={styles.price}>
          {Number(item.price).toLocaleString("vi-VN")} đ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 6,
    overflow: "hidden",

    elevation: 2,
  },

  image: {
    width: "100%",
    height: 105,
    resizeMode: "cover",
  },

  info: {
    padding: 5,
  },

  name: {
    fontSize: 8,
    color: "#333",
    lineHeight: 11,
    minHeight: 22,
  },

  price: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: "bold",
    color: "red",
  },
});

export default ProductCard;
