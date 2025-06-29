import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import Icon from "./Icon";
type Props = {
  onPress: () => void;
};
const DeleteButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        source={require("../assets/icon_delete.png")}
        style={styles.deleteIcon}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  deleteIcon: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    padding: 5,
    tintColor: COLORS.white,
  },
});
export default DeleteButton;
