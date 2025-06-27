import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../navigation/TabNavigator";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { COLORS } from "../constants";
import Icon from "../components/Icon";
import { useState } from "react";

type ProductDetailsScreenProp = RouteProp<
  HomeStackParamList,
  "ProductDetailsScreen"
>;

const ProductDetailsScreen = () => {
  const route = useRoute<ProductDetailsScreenProp>();
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity: number) => {
    if (quantity < 1) {
      Alert.alert("Invalid quantity");
      setQuantity(1);
      return;
    } else if (quantity > Number(route.params.product.stock)) {
      Alert.alert("Not enough stock available");
      setQuantity(Number(route.params.product.stock));
      return;
    }
    setQuantity(newQuantity);
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Image
        style={styles.image}
        source={{ uri: route.params.product.thumbnail }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={styles.title}>{route.params.product.title}</Text>
        <View style={styles.updateQuantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(quantity - 1)}>
            <Text style={styles.quantityStyle}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityStyle}> {quantity} </Text>
          <TouchableOpacity onPress={() => updateQuantity(quantity + 1)}>
            <Text style={styles.quantityStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={styles.category}>{route.params.product.category}</Text>
        <Text>Available {route.params.product.availabilityStatus}</Text>
      </View>
      <Text style={styles.description}>{route.params.product.description}</Text>
      <Text style={styles.subtitle}>Total Price</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${route.params.product.price}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon
            source={require("../assets/icon_shopping.png")}
            style={styles.icon}
          />
          <Text style={{ color: COLORS.white }}> Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    padding: 15,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  updateQuantityContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.grayLight,
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  quantityStyle: {
    fontSize: 20,
    letterSpacing: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 25,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    maxWidth: "60%",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.graySecondary,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: COLORS.graySecondary,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductDetailsScreen;
