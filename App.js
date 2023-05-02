import { StyleSheet, View } from "react-native";
import Header from "./components/header";
import Param from "./components/realTimeParamters";
import SlidingSidebar from "./components/sidebar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Param />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    height: "100%"
  },
});
