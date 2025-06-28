import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { COLORS } from "../constants";

type CounterProps = {
  stock: number;
  onChange?: (value: number) => void;
};

const Counter = ({ stock, onChange }: CounterProps) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      Alert.alert("Invalid quantity");
      return;
    }
    if (newQuantity > stock) {
      Alert.alert("Not enough stock");
      return;
    }
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => updateQuantity(quantity - 1)}
        disabled={quantity === 1}
      >
        <Text style={styles.quantityStyle}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantityStyle}>{quantity}</Text>

      <TouchableOpacity
        onPress={() => updateQuantity(quantity + 1)}
        disabled={quantity === stock}
      >
        <Text style={styles.quantityStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.grayLight,
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#888",
  },
  quantityStyle: {
    fontSize: 20,
    letterSpacing: 5,
  },
});

export default Counter;
