import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-amber-600">
      <Text className="text-3xl font-pblack">Hello World!</Text>
        <Link href="/home" className="text-blue-500">Home</Link>
    </View>
  );
}
