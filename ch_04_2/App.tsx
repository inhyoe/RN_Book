import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Cache from "./src/screens/Cache";
import Memo from "./src/screens/Memo";
import Fibo from "./src/screens/Fibo";
const { width } = Dimensions.get("window");
const numberOfComponents = 3;
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={[styles.contentContainerStyle]}
      >
        {/* <Cache /> */}
        {/* <Memo /> */}
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  contentContainerStyle: { width: width * numberOfComponents },
});
