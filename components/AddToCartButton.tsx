import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";
import Icon from "./Icon";

const AddToCartButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon
        source={require("../assets/icon_shopping.png")}
        style={styles.icon}
      />
      <Text style={styles.text}> Add to cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
    marginLeft: 5,
  },
});

export default AddToCartButton;
