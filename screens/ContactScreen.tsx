import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ActionButton from "../components/ActionButton";
import Icon from "../components/Icon";
import Title from "../components/Title";
import UserInput from "../components/UserInput";
import { COLORS } from "../constants";
import { validateUser } from "../utils/inputValidation";
import { BasketStackParamList } from "../navigation/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type User = {
  name: string;
  phone: string;
  email: string;
  city: string;
  street: string;
};

const ContactScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BasketStackParamList>>();

  const [user, setUser] = useState<User>({
    name: "",
    phone: "",
    email: "",
    city: "",
    street: "",
  });

  const handleConfirm = () => {
    const error = validateUser(user);

    if (error) {
      alert(error);
      return;
    }
    navigation.navigate("CheckoutScreen", { user });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Title text="Details" />
          <Icon
            source={require("../assets/icon_data.jpg")}
            style={styles.image}
          />
          <UserInput
            placeholder="Enter your name"
            value={user.name}
            onChangeText={(text) => setUser({ ...user, name: text })}
          />
          <UserInput
            placeholder="Enter your phone number"
            value={user.phone}
            onChangeText={(text) => setUser({ ...user, phone: text })}
          />
          <UserInput
            placeholder="Enter your email"
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
          <UserInput
            placeholder="Enter your city"
            value={user.city}
            onChangeText={(text) => setUser({ ...user, city: text })}
          />
          <UserInput
            placeholder="Enter your street address"
            value={user.street}
            onChangeText={(text) => setUser({ ...user, street: text })}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <ActionButton
              text="Confirm"
              onPress={handleConfirm}
              style={styles.confirmButton}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: "30%",
  },
  confirmButton: {
    width: "40%",
    height: 40,
  },
  cancelButton: {
    color: COLORS.graySecondary,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ContactScreen;
