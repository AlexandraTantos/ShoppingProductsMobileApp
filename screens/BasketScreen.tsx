import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import BasketCard from "../components/BasketCard";
import BasketFooter from "../components/BasketFooter";
import Title from "../components/Title";
import { useBasket } from "../hooks/useBasket";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BasketStackParamList } from "../navigation/TabNavigator";

const BasketScreen = () => {
  const { basket, updateQuantity, removeItem } = useBasket();

  const navigation =
    useNavigation<NativeStackNavigationProp<BasketStackParamList>>();

  const handleQuantityChange = (id: number, newQty: number) => {
    updateQuantity(id, newQty);
  };

  const handleDelete = (id: number) => {
    removeItem(id);
  };

  const totalQuantity = basket.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = basket
    .reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    navigation.navigate("ContactScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BackButton />
        <View style={{ flex: 1, marginHorizontal: 20, paddingTop: 70 }}>
          <Title text={"My Cart"} />
          {basket.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            <>
              {basket.map((item) => (
                <BasketCard
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleDelete}
                />
              ))}
            </>
          )}
        </View>
      </ScrollView>
      {basket.length > 0 && (
        <BasketFooter
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          onCheckout={handleCheckout}
          buttonText="Proceed to Checkout"
        />
      )}
    </SafeAreaView>
  );
};

export default BasketScreen;
