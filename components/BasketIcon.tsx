import { StyleSheet } from "react-native";
import Icon from "./Icon";

const BasketIcon = () => (
  <Icon source={require("../assets/icon_shopping.png")} style={styles.icon} />
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default BasketIcon;
