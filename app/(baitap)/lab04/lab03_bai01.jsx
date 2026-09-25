import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

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
      <View className="bg-[#087ff5] rounded-[5px] py-[9px] mb-[8px] mt-[3px] justify-center items-center">
        <Text className="text-white text-[12px] font-bold">
          DANH SÁCH SẢN PHẨM
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <Pressable
        onPress={() => setLimit(limit + 6)}
        className="items-center justify-center py-[12px]"
      >
        <Text className="text-[#087ff5] text-[9px]">
          Tải thêm
        </Text>
      </Pressable>
    );
  };

  const EmptyView = () => {
    return (
      <View className="flex-1 justify-center items-center py-[30px]">
        <Text>Không tìm thấy dữ liệu</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#f1f3f5] px-[8px]">
        <FlatList
          data={products}
          renderItem={ProductCard}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{
            gap: 6,
            marginBottom: 6,
          }}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          ListEmptyComponent={EmptyView}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default bai01;