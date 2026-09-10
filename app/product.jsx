import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const info = {
  "bun-bo": { title: "Bún bò Huế", icon: "🍜", color: "#E9724C", time: "55 phút", servings: "4 người", level: "Vừa", intro: "Hương sả, mắm ruốc và vị cay dịu hòa quyện trong tô bún nóng hổi.", ingredients: ["700g bắp bò", "500g bún tươi", "2 cây sả", "Mắm ruốc Huế", "Rau thơm, giá đỗ"], steps: ["Hầm bắp bò với sả và hành trong 40 phút.", "Nêm mắm ruốc, nước mắm, đường và sa tế vừa ăn.", "Trụng bún, xếp thịt rồi chan nước dùng nóng."] },
  default: { title: "Công thức hôm nay", icon: "🍲", color: "#D78B3E", time: "35 phút", servings: "2 người", level: "Dễ", intro: "Một công thức đơn giản, nhiều hương vị để bạn bắt đầu vào bếp.", ingredients: ["Nguyên liệu tươi", "Gia vị cơ bản", "Rau ăn kèm"], steps: ["Sơ chế nguyên liệu sạch sẽ.", "Nấu theo khẩu vị của bạn.", "Trình bày và thưởng thức khi còn nóng."] },
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const recipe = info[id] || info.default;
  const [saved, setSaved] = useState(false);
  return <View style={styles.screen}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
      <View style={[styles.cover, { backgroundColor: recipe.color }]}>
        <Pressable onPress={() => router.back()} style={styles.roundButton}><Text style={styles.roundButtonText}>‹</Text></Pressable>
        <Pressable onPress={() => setSaved(!saved)} style={[styles.roundButton, styles.save]}><Text style={styles.roundButtonText}>{saved ? "♥" : "♡"}</Text></Pressable>
        <Text style={styles.coverEmoji}>{recipe.icon}</Text>
        <View style={styles.dotOne}/><View style={styles.dotTwo}/>
      </View>
      <View style={styles.body}>
        <Text style={styles.category}>CẨM NANG ẨM THỰC</Text>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.intro}>{recipe.intro}</Text>
        <View style={styles.stats}>
          <Stat icon="◷" label="Thời gian" value={recipe.time}/><Stat icon="♨" label="Độ khó" value={recipe.level}/><Stat icon="◉" label="Khẩu phần" value={recipe.servings}/>
        </View>
        <Text style={styles.heading}>Nguyên liệu</Text>
        <View style={styles.ingredientBox}>{recipe.ingredients.map((item) => <View key={item} style={styles.ingredient}><Text style={styles.bullet}>✦</Text><Text style={styles.ingredientText}>{item}</Text></View>)}</View>
        <Text style={styles.heading}>Cách thực hiện</Text>
        {recipe.steps.map((step, index) => <View key={step} style={styles.step}><View style={styles.stepNumber}><Text style={styles.stepNumberText}>{index + 1}</Text></View><Text style={styles.stepText}>{step}</Text></View>)}
      </View>
    </ScrollView>
    <Pressable style={styles.cookButton}><Text style={styles.cookButtonText}>Bắt đầu nấu  →</Text></Pressable>
  </View>;
}

function Stat({ icon, label, value }) { return <View style={styles.stat}><Text style={styles.statIcon}>{icon}</Text><Text style={styles.statLabel}>{label}</Text><Text style={styles.statValue}>{value}</Text></View>; }

const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: "#FFF9F2" }, content: { paddingBottom: 100 }, cover: { height: 320, borderBottomLeftRadius: 35, borderBottomRightRadius: 35, overflow: "hidden", alignItems: "center", justifyContent: "center" }, coverEmoji: { fontSize: 145, zIndex: 1 }, roundButton: { position: "absolute", top: 58, left: 22, width: 42, height: 42, borderRadius: 21, backgroundColor: "#FFFFFFC9", alignItems: "center", justifyContent: "center", zIndex: 2 }, save: { left: undefined, right: 22 }, roundButtonText: { color: "#2F5D50", fontSize: 27, lineHeight: 29, fontWeight: "700" }, dotOne: { position: "absolute", width: 200, height: 200, borderRadius: 100, backgroundColor: "#FFFFFF24", top: 130, left: -70 }, dotTwo: { position: "absolute", width: 150, height: 150, borderRadius: 75, backgroundColor: "#FFFFFF1F", top: -30, right: -35 }, body: { padding: 23 }, category: { color: "#B66A48", fontWeight: "800", fontSize: 10, letterSpacing: 1.4, marginTop: 5 }, title: { color: "#2E3430", fontWeight: "800", fontSize: 31, marginTop: 7 }, intro: { color: "#727A73", fontSize: 14, lineHeight: 21, marginTop: 11 }, stats: { backgroundColor: "#F3ECE2", borderRadius: 17, marginTop: 21, flexDirection: "row", paddingVertical: 15 }, stat: { flex: 1, alignItems: "center", borderRightWidth: 1, borderRightColor: "#DDD2C4" }, statIcon: { color: "#B66A48", fontSize: 18 }, statLabel: { color: "#8B8D87", fontSize: 9, marginTop: 4 }, statValue: { color: "#334037", fontSize: 11, fontWeight: "800", marginTop: 2 }, heading: { color: "#303A33", fontWeight: "800", fontSize: 20, marginTop: 28, marginBottom: 12 }, ingredientBox: { backgroundColor: "#FFFFFF", borderRadius: 17, padding: 16, gap: 13 }, ingredient: { flexDirection: "row", alignItems: "center" }, bullet: { color: "#D4875C", fontSize: 12, width: 24 }, ingredientText: { color: "#4A544D", fontSize: 14 }, step: { flexDirection: "row", gap: 13, marginBottom: 19 }, stepNumber: { width: 29, height: 29, borderRadius: 15, backgroundColor: "#315E51", alignItems: "center", justifyContent: "center" }, stepNumberText: { color: "#FFFFFF", fontWeight: "800", fontSize: 12 }, stepText: { flex: 1, color: "#59625B", fontSize: 14, lineHeight: 21, paddingTop: 3 }, cookButton: { position: "absolute", bottom: 20, left: 22, right: 22, height: 55, borderRadius: 17, backgroundColor: "#315E51", alignItems: "center", justifyContent: "center", ...Platform.select({ web: { boxShadow: "0px 4px 10px rgba(25, 60, 50, 0.25)" }, default: { shadowColor: "#193C32", shadowOpacity: 0.25, elevation: 5 } }) }, cookButtonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 },
});
