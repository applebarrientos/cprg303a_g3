import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ScientificCalculator() {
  const operations = [
    "RAD",
    "√",
    "n√",
    "π",
    "INV",
    "^",
    "!",
    "MOD",
    "SIN",
    "COS",
    "TAN",
    "EXP",
    "e",
    "LN",
    "LOG",
    "()",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>0</Text>
      <View style={styles.row}>
        {operations.slice(0, 4).map((op) => (
          <TouchableOpacity key={op} style={styles.button}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Add the rest of the rows similarly */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", padding: 10 },
  display: {
    color: "white",
    fontSize: 48,
    textAlign: "right",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: "gold",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 20 },
});
