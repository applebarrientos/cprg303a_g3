import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function TopMenu() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.menuButton}>☰</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              router.push("/");
              setModalVisible(false);
            }}
          >
            <Text style={styles.menuItem}>Basic Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/scientific");
              setModalVisible(false);
            }}
          >
            <Text style={styles.menuItem}>Scientific Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/converter");
              setModalVisible(false);
            }}
          >
            <Text style={styles.menuItem}>Converter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "black" },
  menuButton: { color: "white", fontSize: 18 },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: { color: "gold", fontSize: 22, margin: 10 },
  closeButton: { color: "red", fontSize: 18, marginTop: 20 },
});
