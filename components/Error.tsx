import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../constants";
import { AxiosError } from "axios";

type ErrorProps = {
  error?: AxiosError | null;
};
const Error = (props: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img404.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Ooops!</Text>
      <Text style={styles.subtitle}>
        Something went wrong... {props.error?.message}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.graySecondary,
    marginTop: 8,
  },
});
export default Error;
