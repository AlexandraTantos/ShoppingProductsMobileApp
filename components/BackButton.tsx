import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import Icon from "./Icon";

type Props = {
  onPress?: () => void;
  style?: object;
};

const BackButton = ({ onPress, style }: Props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={[styles.backButton, style]} onPress={handlePress}>
      <Icon
        source={require("../assets/icon_back.png")}
        style={styles.backIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: COLORS.black,
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 22,
    height: 22,
    tintColor: "white",
  },
});

export default BackButton;
