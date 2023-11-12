import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import CustomerNavigator from "./src/navigation/CustomerNavigator";
import CustomerList from "./src/screens/CustomerScreens/CustomerList";
export default function App() {
  return (
    CustomerList()
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
