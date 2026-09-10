import { Redirect } from "expo-router";

export default function Index() {
  // Điểm vào app: bắt đầu từ Màn hình 1 (Start flow)
  return <Redirect href="/start/1" />;
}
