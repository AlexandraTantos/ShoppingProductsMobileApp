import { View, Text, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import { COLORS } from "../constants";

type Props = {
  totalQuantity: number;
  totalPrice: string;
  onCheckout: () => void;
};
const BasketFooter = ({ totalQuantity, totalPrice, onCheckout }: Props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerText}>
        <Text style={styles.footerTextQuantity}>Products: {totalQuantity}</Text>
        <Text style={styles.footerTextPrice}>Total: ${totalPrice}</Text>
      </View>
      <ActionButton
        text="Proceed to checkout"
        icon={require("../assets/icon_right.png")}
        onPress={onCheckout}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    marginTop: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: COLORS.graySecondary,
    marginHorizontal: 20,
  },
  footerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerTextQuantity: {
    color: COLORS.graySecondary,
  },
  footerTextPrice: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default BasketFooter;
