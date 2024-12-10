import { View } from "react-native";
import BasicCalculator from "../components/BasicCalculator";
import TopMenu from "../components/TopMenu";

export default function BasicCalculatorScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopMenu />
      <BasicCalculator />
    </View>
  );
}
