import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { COLORS } from "../constants";
import Icon from "./Icon";

type Props = {
  text: string;
  onPress?: () => void;
  icon?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconPosition?: "left" | "right";
};

const ActionButton = ({
  text,
  onPress,
  icon,
  style,
  textStyle,
  iconPosition = "right",
}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && iconPosition === "left" && (
        <Icon source={icon} style={styles.icon} />
      )}
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      {icon && iconPosition === "right" && (
        <Icon source={icon} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
});

export default ActionButton;
