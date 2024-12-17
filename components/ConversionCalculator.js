import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

export default function Conversion() {
  const [values, setValues] = useState();
  const circle = createCircleArray();
  const square = createSquareArray();
  const triangle = createTriangleArray();
  const currency = createCurrencyPairs();

  function createCircleArray() {
    const names = ['Area', 'Diameter', 'Circumference'];
    const formulas = ['πr2', '2r', '2πr'];

    return {'category': 'Circle', 'names': names, 'formulas': formulas};
  }

  function createSquareArray() {
    const names = ['Area', 'Perimeter'];
    const formulas = ['s x s', '4 x s'];

    return {'category': 'Square', 'names': names, 'formulas': formulas};
  }

  function createTriangleArray() {
    const names = ['Area', 'Pythagoras', 'Perimeter'];
    const formulas = ['bh/2', 'a^2 + b^2 = c^2', 'a + b + c'];

    return {'category': 'Triangle', 'names': names, 'formulas': formulas};
  }

  function createCurrencyPairs() {
    const names = ['CAD/USD', 'CAD/EUR', 'CAD/JPY', 'CAD/CNY', 'CAD/AUD'];
    const formulas = ['0.70', '0.67', '108.26', '5.12', '1.10'];

    return {'category': 'Currency', 'names': names, 'formulas': formulas};
  }
  

  return (
    <ScrollView style={styles.container}>
      {/* Your components and functionality can go here  */}

      {
        <View style={{ backgroundColor: 'gold', marginVertical: 2 }}>
          <Text style={styles.item_category}>{circle.category}</Text>
        </View>
      }
      {createCircleArray().names.map((name, nameIndex) => (
          <View style={styles.item}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.item_name}>{name}</Text>
              <Text style={styles.item_formula}>{circle.formulas[nameIndex]}</Text>
            </View>
          </View>
      ))}
      <View style={styles.spacer}></View>
      {
        <View style={{ backgroundColor: 'gold', marginVertical: 2 }}>
          <Text style={styles.item_category}>{square.category}</Text>
        </View>
      }
      {createSquareArray().names.map((name, nameIndex) => (
          <View style={styles.item}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.item_name}>{name}</Text>
              <Text style={styles.item_formula}>{square.formulas[nameIndex]}</Text>
            </View>
          </View>
      ))}
      <View style={styles.spacer}></View>
      {
        <View style={{ backgroundColor: 'gold', marginVertical: 2 }}>
          <Text style={styles.item_category}>{triangle.category}</Text>
        </View>
      }
      {createTriangleArray().names.map((name, nameIndex) => (
          <View style={styles.item}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.item_name}>{name}</Text>
              <Text style={styles.item_formula}>{triangle.formulas[nameIndex]}</Text>
            </View>
          </View>
      ))}
      <View style={styles.spacer}></View>
      {
        <View style={{ backgroundColor: 'gold', marginVertical: 2 }}>
          <Text style={styles.item_category}>{currency.category}</Text>
        </View>
      }
      {createCurrencyPairs().names.map((name, nameIndex) => (
          <View style={styles.item}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.item_name}>{name}</Text>
              <Text style={styles.item_formula}>{currency.formulas[nameIndex]}</Text>
            </View>
          </View>
      ))}



      {/* Footer displaying the page/screen name */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Conversion</Text>
      </View>
    </ScrollView>
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
  item: {
    flexDirection: 'row',
    backgroundColor: 'gold',
    marginVertical: 2,
    padding: 2,
  },
  item_category: {
    textAlign: 'center',
    fontSize: 16,

  },
  item_name: {

  },
  item_formula: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  spacer: {
    margin: 8
  }
});
