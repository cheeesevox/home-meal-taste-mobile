import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { StyleSheet } from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App.js page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
