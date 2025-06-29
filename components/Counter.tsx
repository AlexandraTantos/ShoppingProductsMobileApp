import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";

type CounterProps = {
  stock: number;
  value: number;
  onChange?: (value: number) => void;
};

const Counter = ({ stock, value, onChange }: CounterProps) => {
  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      Alert.alert("Invalid quantity");
      return;
    }
    if (newQuantity > stock) {
      Alert.alert("Not enough stock");
      return;
    }
    onChange?.(newQuantity);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => updateQuantity(value - 1)}>
        <Text style={styles.quantityStyle}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantityStyle}>{value}</Text>

      <TouchableOpacity onPress={() => updateQuantity(value + 1)}>
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
    width: 90,
    height: 35,
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
