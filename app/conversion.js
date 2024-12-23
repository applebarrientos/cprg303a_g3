import { View } from "react-native";
import Conversion from "../components/ConversionCalculator";
import TopMenu from "../components/TopMenu";

export default function ConversionScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopMenu />
      <Conversion />
    </View>
  );
}
