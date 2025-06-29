import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants";

type Props = {
  onPress: () => void;
  text?: string;
};

const CloseModalButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    marginTop: 5,
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CloseModalButton;
