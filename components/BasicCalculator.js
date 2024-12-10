import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BasicCalculator() {
  return (
    <View style={styles.container}>
      {/* Your components and functionality can go here */}

      <Text style={styles.display}>0</Text>
      <View style={styles.row}>
        {["AC", "÷", "x", "⌫"].map((op) => (
          <TouchableOpacity key={op} style={styles.button}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {[
        [7, 8, 9, "-"],
        [4, 5, 6, "+"],
        [1, 2, 3, "="],
        [".", 0, "%", ""],
      ].map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((val) => (
            <TouchableOpacity key={val} style={styles.button}>
              <Text style={styles.buttonText}>{val}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Footer displaying the page/screen name */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Basic Calculator</Text>
      </View>
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
  buttonText: {
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#848884",
    fontSize: 16,
  },
});
