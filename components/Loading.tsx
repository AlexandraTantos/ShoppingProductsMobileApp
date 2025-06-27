import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={COLORS.black} />
      <Text style={styles.title}>LOADING</Text>
      <Text style={styles.subtitle}>Please wait while data is loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginVertical: 20,
  },
  subtitle: {
    color: COLORS.graySecondary,
    fontSize: 16,
    marginTop: 5,
  },
});
export default Loading;
