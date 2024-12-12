import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BasicCalculator() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handlePress = (value) => {
    if (typeof value === "number" || value === ".") {
      // Handle numbers and decimals
      if (waitingForOperand) {
        setDisplay(value.toString());
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? value.toString() : display + value.toString());
      }
    } else if (value === "AC") {
      // Reset calculator
      setDisplay("0");
      setResult(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (value === "⌫") {
      // Backspace
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    } else if (["+", "-", "x", "÷", "%"].includes(value)) {
      // Handle operators
      if (result == null) {
        setResult(parseFloat(display));
      } else if (!waitingForOperand) {
        calculateResult(value);
      }
      setOperator(value);
      setWaitingForOperand(true);
    } else if (value === "=") {
      // Calculate final result
      if (operator) {
        calculateResult();
        setOperator(null);
      }
    }
  };

  const calculateResult = (nextOperator = null) => {
    const current = parseFloat(display);
    let newResult = result;

    switch (operator) {
      case "+":
        newResult += current;
        break;
      case "-":
        newResult -= current;
        break;
      case "x":
        newResult *= current;
        break;
      case "÷":
        newResult /= current;
        break;
      case "%":
        newResult %= current;
        break;
    }

    setResult(newResult);
    setDisplay(newResult.toString());
    setWaitingForOperand(true);

    if (nextOperator) {
      setOperator(nextOperator);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display Screen */}
      <Text style={styles.display}>{display}</Text>

      {/* First Row */}
      <View style={styles.row}>
        {["AC", "÷", "x", "⌫"].map((op) => (
          <TouchableOpacity key={op} style={styles.button} onPress={() => handlePress(op)}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculator Buttons */}
      {[
        [7, 8, 9, "-"],
        [4, 5, 6, "+"],
        [1, 2, 3, "="],
        [".", 0, "%", ""],
      ].map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((val) => (
            <TouchableOpacity
              key={val}
              style={styles.button}
              onPress={() => handlePress(val)}
              disabled={val === ""}
            >
              <Text style={styles.buttonText}>{val}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Footer */}
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
