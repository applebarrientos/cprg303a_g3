import { View } from "react-native";
import ScientificCalculator from "../components/ScientificCalculator";
import TopMenu from "../components/TopMenu";

export default function ScientificCalculatorScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopMenu />
      <ScientificCalculator />
    </View>
  );
}
