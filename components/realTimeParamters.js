import { Text, View, StyleSheet } from "react-native";
import Card from "./card";
import MyChartComponent from "./chart";

const Param = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Real Time Parameters</Text>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Card title="SOH" description="20" />
        <Card title="SOC" description="20" />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Card title="SOH" description="20" />
        <Card title="SOC" description="20" />
      </View>

      <MyChartComponent />
    </View>
  );
};

export default Param;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
