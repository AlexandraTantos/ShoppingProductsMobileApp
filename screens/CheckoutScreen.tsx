import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ActionButton from "../components/ActionButton";
import BackButton from "../components/BackButton";
import CloseModalButton from "../components/CloseModalButton";
import Title from "../components/Title";
import { COLORS } from "../constants";
import { useBasket } from "../hooks/useBasket";
import { BasketStackParamList } from "../navigation/TabNavigator";
type CheckoutScreenProp = RouteProp<BasketStackParamList, "CheckoutScreen">;

const CheckoutScreen = () => {
  const route = useRoute<CheckoutScreenProp>();
  const { basket } = useBasket();
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const totalPrice = basket
    .reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
    .toFixed(2);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BackButton />
        <View style={{ flex: 1, marginHorizontal: 20, paddingTop: 70 }}>
          <Title text={"Delivery Address"} />
          <View style={styles.containerUser}>
            <Text style={styles.text}>
              Full Name:{" "}
              <Text style={styles.bold}>{route.params.user.name}</Text>
            </Text>
            <Text style={styles.text}>
              Phone Number:{" "}
              <Text style={styles.bold}>{route.params.user.phone}</Text>
            </Text>
            <Text style={styles.text}>
              Email: <Text style={styles.bold}>{route.params.user.email}</Text>
            </Text>
            <Text style={styles.text}>
              City: <Text style={styles.bold}>{route.params.user.city}</Text>
            </Text>
            <Text style={styles.text}>
              Address:{" "}
              <Text style={styles.bold}>{route.params.user.street}</Text>
            </Text>
          </View>
          <View>
            {basket.map((item, index) => (
              <View style={styles.itemContainer} key={item.id || index}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text>{item.brand}</Text>
                  <Text style={styles.bold}>
                    ${(item.discountedPrice * item.quantity).toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={{ color: COLORS.graySecondary }}>Total Price</Text>
          <Text style={styles.bold}>{totalPrice}</Text>
        </View>
        <ActionButton
          style={styles.button}
          text="Place Order"
          onPress={handlePlaceOrder}
        />
      </View>
      <Modal visible={modalOpen} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={{ marginBottom: 10 }}>Your Order has been placed</Text>
            <CloseModalButton onPress={closeModal} text="Go Back" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerUser: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    width: 220,
  },
  text: {
    marginVertical: 8,
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.grayLight,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 15,
  },
  button: {
    width: 150,
    borderRadius: 20,
  },
});
export default CheckoutScreen;
