import { StyleSheet, TextInput } from "react-native";

type UserInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};
const UserInput = ({ placeholder, value, onChangeText }: UserInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 16,
  },
});
export default UserInput;
