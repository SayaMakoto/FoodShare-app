import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../../../components/ProductCard";
import productall from "../../../data/products.json";

const bai01 = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const datafilter = productall.slice(0, limit);
    setProducts(datafilter);
  }, [limit]);

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>DANH SÁCH SẢN PHẨM</Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <Pressable onPress={() => setLimit(limit + 6)} style={styles.footer}>
        <Text style={styles.footerText}>Tải thêm</Text>
      </Pressable>
    );
  };

  const EmptyView = () => {
    return (
      <View style={styles.empty}>
        <Text>Không tìm thấy dữ liệu</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          renderItem={ProductCard}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={styles.row}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          ListEmptyComponent={EmptyView}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f5",
    paddingHorizontal: 8,
  },

  header: {
    backgroundColor: "#087ff5",
    borderRadius: 5,
    paddingVertical: 9,
    marginBottom: 8,
    marginTop: 3,

    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  row: {
    gap: 6,
    marginBottom: 6,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  footerText: {
    color: "#087ff5",
    fontSize: 9,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
});

export default bai01;
