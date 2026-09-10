import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  Alert,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import StartScreenSwitcher from "../../components/StartScreenSwitcher";

const initialPosts = [
  {
    id: "post-1",
    author: "Just a Horse",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    caption: "Happy 6th year of debut!! 🎂✨",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    likes: 1284,
    comments: 96,
  },
  {
    id: "post-2",
    author: "Kujou Sara",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    caption: "It's all for Raiden Shogun. 🌸🍡",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    likes: 2450,
    comments: 182,
  },
  {
    id: "post-3",
    author: "Kaeya Alberich",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    caption: "I have a surprise for someone. 🍎🧁",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    likes: 890,
    comments: 42,
  },
  {
    id: "post-4",
    author: "Xiangling",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    caption: "Black-Back Bass Stew is ready! Fresh ingredients from Liyue Harbor! 🌶️🐟",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    likes: 3120,
    comments: 215,
  },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [followingUsers, setFollowingUsers] = useState({});
  const [activeTab, setActiveTab] = useState("home");

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleSave = (postId) => {
    setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleFollow = (author) => {
    setFollowingUsers((prev) => ({ ...prev, [author]: !prev[author] }));
  };

  const removePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#131E3D" />
      <StartScreenSwitcher currentScreen={11} />

      {/* Main Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Card matching iPhone 17 - 11 */}
        <View style={styles.headerCard}>
          <Text style={styles.headerGreeting}>Hello traveler!</Text>
          <Text style={styles.headerSubtitle}>Explore Teyvat</Text>
        </View>

        {/* Recipe / Social Posts Feed */}
        <View style={styles.feedList}>
          {posts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            const isSaved = !!savedPosts[post.id];
            const isFollowing = !!followingUsers[post.author];
            const displayLikes = isLiked ? post.likes + 1 : post.likes;

            return (
              <View key={post.id} style={styles.postCard}>
                {/* Author Info & Follow */}
                <View style={styles.cardHeader}>
                  <View style={styles.authorRow}>
                    <Image
                      source={{ uri: post.avatar }}
                      style={styles.authorAvatar}
                    />
                    <Text style={styles.authorName}>{post.author}</Text>
                  </View>

                  <View style={styles.headerActions}>
                    <Pressable
                      style={[
                        styles.followBtn,
                        isFollowing && styles.followingBtn,
                      ]}
                      onPress={() => toggleFollow(post.author)}
                    >
                      <Text
                        style={[
                          styles.followText,
                          isFollowing && styles.followingText,
                        ]}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => removePost(post.id)}
                      hitSlop={10}
                      style={styles.closeBtn}
                    >
                      <Ionicons name="close" size={16} color="#6B7280" />
                    </Pressable>
                  </View>
                </View>

                {/* Caption with underline line */}
                <Text style={styles.captionText}>{post.caption}</Text>
                <View style={styles.captionDivider} />

                {/* Food Recipe Image */}
                <Pressable
                  onPress={() => router.push({ pathname: "/product", params: { id: post.id } })}
                >
                  <Image
                    source={{ uri: post.image }}
                    style={styles.postImage}
                    resizeMode="cover"
                  />
                </Pressable>

                {/* Post Action Bar (Like, Comment, Save, Share, More) */}
                <View style={styles.cardActions}>
                  <View style={styles.leftActions}>
                    {/* Like */}
                    <Pressable
                      style={styles.actionBtn}
                      onPress={() => toggleLike(post.id)}
                      hitSlop={6}
                    >
                      <Ionicons
                        name={isLiked ? "heart" : "heart-outline"}
                        size={21}
                        color={isLiked ? "#E11D48" : "#111827"}
                      />
                    </Pressable>

                    {/* Comment */}
                    <Pressable
                      style={styles.actionBtn}
                      onPress={() => Alert.alert("Bình luận", `Bình luận về bài của ${post.author}`)}
                      hitSlop={6}
                    >
                      <Ionicons
                        name="chatbubble-outline"
                        size={19}
                        color="#111827"
                      />
                    </Pressable>

                    {/* Bookmark / Save */}
                    <Pressable
                      style={styles.actionBtn}
                      onPress={() => toggleSave(post.id)}
                      hitSlop={6}
                    >
                      <Ionicons
                        name={isSaved ? "bookmark" : "bookmark-outline"}
                        size={19}
                        color={isSaved ? "#131E3D" : "#111827"}
                      />
                    </Pressable>

                    {/* Share */}
                    <Pressable
                      style={styles.actionBtn}
                      onPress={() => Alert.alert("Chia sẻ", "Đã sao chép liên kết bài viết!")}
                      hitSlop={6}
                    >
                      <Ionicons name="share-social-outline" size={19} color="#111827" />
                    </Pressable>
                  </View>

                  {/* More Options */}
                  <Pressable
                    onPress={() => Alert.alert("Tùy chọn", "Lưu bài viết, Báo cáo, Ẩn...")}
                    hitSlop={8}
                  >
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={20}
                      color="#374151"
                    />
                  </Pressable>
                </View>

                {/* Likes Counter */}
                <Text style={styles.likesCount}>
                  {displayLikes.toLocaleString()} lượt thích
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Floating Bottom Tab Bar matching iPhone 17 - 11 */}
      <View style={styles.floatingTabBar}>
        {/* Tab 1: Home */}
        <Pressable
          style={[styles.tabItem, activeTab === "home" && styles.tabActive]}
          onPress={() => setActiveTab("home")}
        >
          <Ionicons
            name={activeTab === "home" ? "home" : "home-outline"}
            size={22}
            color={activeTab === "home" ? "#FFFFFF" : "#9CA3AF"}
          />
        </Pressable>

        {/* Tab 2: Cookbook / Recipe */}
        <Pressable
          style={[styles.tabItem, activeTab === "cookbook" && styles.tabActive]}
          onPress={() => {
            setActiveTab("cookbook");
            router.push("/product");
          }}
        >
          <Ionicons
            name={activeTab === "cookbook" ? "book" : "book-outline"}
            size={22}
            color={activeTab === "cookbook" ? "#FFFFFF" : "#9CA3AF"}
          />
        </Pressable>

        {/* Tab 3: Create Recipe */}
        <Pressable
          style={[styles.tabItem, activeTab === "create" && styles.tabActive]}
          onPress={() => {
            setActiveTab("create");
            Alert.alert("Chia sẻ công thức", "Mở trình tạo công thức món ăn mới!");
          }}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={activeTab === "create" ? "#FFFFFF" : "#9CA3AF"}
          />
        </Pressable>

        {/* Tab 4: Search */}
        <Pressable
          style={[styles.tabItem, activeTab === "search" && styles.tabActive]}
          onPress={() => {
            setActiveTab("search");
            Alert.alert("Tìm kiếm", "Tìm kiếm món ăn, nguyên liệu Teyvat");
          }}
        >
          <Ionicons
            name="search-outline"
            size={22}
            color={activeTab === "search" ? "#FFFFFF" : "#9CA3AF"}
          />
        </Pressable>

        {/* Tab 5: Profile Avatar */}
        <Pressable
          style={[styles.tabItem, activeTab === "profile" && styles.tabActive]}
          onPress={() => {
            setActiveTab("profile");
            router.push("/start/7");
          }}
        >
          <Image
            source={require("../../assets/start/avatar_ready.png")}
            style={[
              styles.tabAvatar,
              activeTab === "profile" && styles.tabAvatarActive,
            ]}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingBottom: 110,
  },
  headerCard: {
    backgroundColor: "#131E3D",
    paddingTop: 80,
    paddingBottom: 24,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerGreeting: {
    fontSize: 24,
    fontWeight: "800",
    color: "#F5BD47",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#9EA8C2",
    fontWeight: "500",
  },
  feedList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 12,
    marginBottom: 16,
    ...Platform.select({
      web: {
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
      },
    }),
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E2E8F0",
  },
  authorName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
    textDecorationLine: "underline",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  followBtn: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  followingBtn: {
    backgroundColor: "#131E3D",
  },
  followText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#111827",
  },
  followingText: {
    color: "#FFFFFF",
  },
  closeBtn: {
    padding: 2,
  },
  captionText: {
    fontSize: 12,
    color: "#374151",
    marginBottom: 6,
    fontWeight: "500",
  },
  captionDivider: {
    width: "100%",
    height: 0.8,
    backgroundColor: "#E5E7EB",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    backgroundColor: "#E2E8F0",
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 4,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  actionBtn: {
    padding: 2,
  },
  likesCount: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6B7280",
    marginTop: 2,
  },
  floatingTabBar: {
    position: "absolute",
    bottom: 22,
    left: 20,
    right: 20,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(25, 28, 38, 0.92)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 12,
    ...Platform.select({
      web: {
        boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.35)",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 8,
      },
    }),
  },
  tabItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
  tabAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.2,
    borderColor: "#E2B562",
  },
  tabAvatarActive: {
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});
