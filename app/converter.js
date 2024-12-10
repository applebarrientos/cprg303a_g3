import { View, Text } from "react-native";
import TopMenu from "../components/TopMenu";

export default function ConverterScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TopMenu />
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
        Converter Screen (To be implemented)
      </Text>
    </View>
  );
}
