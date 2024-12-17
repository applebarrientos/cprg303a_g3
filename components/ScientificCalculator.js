import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);


  
  const handlePress = (value) => {
    if (typeof value === "number" || value === ".") {
      // Handle numbers and decimals
      if (waitingForOperand || !result) {
        setDisplay(value.toString());
        setWaitingForOperand(false);
      } 
      else {
        setDisplay(display === "0" ? value.toString() : display + value.toString());
      }
    } else if (value === "π") {
      // Handles Pi
      if (waitingForOperand) {
        setDisplay((Math.PI).toString());
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? Math.PI.toString() : Math.PI.toString());
      }
    } else if (value === "e") {
      // Handles euler's
      if (waitingForOperand) {
        setDisplay((Math.E).toString());
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? Math.E.toString() : Math.E.toString());
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
    } else if (["SEC", "CSC", "COT", "SIN", "COS", "TAN", "LOG", "EXP", "INV", "!", "|n|", "√"].includes(value)) {
      if (!waitingForOperand) {
        calculateSpecialResult(value);
      }
      
    } else if (["+", "-", "x", "÷", "%", "^", "n√"].includes(value)) {
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
        setResult(null)
        setWaitingForOperand(false);
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
      case "^":
        newResult = Math.pow(newResult, current)
        break
      case "n√":
        newResult = Math.pow(current, 1 / newResult)

    }

    setResult(newResult);
    setDisplay(newResult.toString());
    setWaitingForOperand(true);

    if (nextOperator) {
      setOperator(nextOperator);
    }
  };

  const calculateSpecialResult = (nextOperator = null) => {
    //Calcuations for single use operators
    const current = parseFloat(display);
    let newResult = result;

    switch (nextOperator) {
      case "√":
        newResult = Math.sqrt(current);
        break;
      case "!":
        let temp = 1; 
        if (current === 0)
          newResult = 1;
        for (let i = 2; i <= current; i++) 
          temp = temp * i; 
        newResult = temp;
        break;
      case "INV":
        newResult = 1 / current;
        break;
      case "EXP":
        newResult = Math.exp(current);
        break;  
      case "MOD":
        newResult -= current;
        break; 
      case "SEC":
        newResult = 1/(Math.cos(current));
        break
      case "CSC":
        newResult = 1/(Math.sin(current));
        break
      case "COT":
        newResult = 1/(Math.tan(current));
        break
      case "|n|":
        newResult = Math.abs(current);
        break
      case "LOG":
        newResult = Math.log10(current);
        break;
      case "SIN":
        newResult = Math.sin(current);
        break;
      case "TAN":
        newResult = Math.tan(current);
        break;
      case "COS":
        newResult = Math.cos(current);
        break;
        
    }

    setDisplay(newResult.toString());
  };

  return (
    <View style={styles.container}>
      {/* Display Screen */}
      <Text style={styles.display}>{display}</Text>

      {/* First Row */}
      <View style={styles.row}>
        {["^", "√", "n√", "π", 7, 8, 9, "AC" ,"⌫"].map((op) => (
          <TouchableOpacity key={op} style={styles.button} onPress={() => handlePress(op)}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculator Buttons */}
      {[
        ["SEC", "CSC", "COT", "e", 4, 5, 6, "÷", "-"],
        ["SIN", "COS", "TAN", "!", 1, 2, 3, "x", "+"],
        ["INV", "LOG", "EXP", "|n|", ".", 0, "%", "", "="],
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
        <Text style={styles.footerText}>Scientific Calculator</Text>
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
    marginTop: -40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 3,
    backgroundColor: "gold",
    padding: 15,
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
