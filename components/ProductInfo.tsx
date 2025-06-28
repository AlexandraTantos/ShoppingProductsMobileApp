import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { COLORS } from "../constants";
import Icon from "../components/Icon";
import Counter from "../components/Counter";
import AddToCartButton from "../components/AddToCartButton";
import { Product } from "../screens/ProductsScreen";
import { getDiscountedPrice } from "../utils/priceUtils";
import { useState } from "react";
import ReviewsModal from "./ReviewsModal";

type Props = {
  product: Product;
};

const ProductInfo = ({ product }: Props) => {
  const discountedPrice = getDiscountedPrice(
    product.price,
    product.discountPercentage
  );
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.description}>
        <Text style={styles.title}>{product.title}</Text>
        <Counter stock={Number(product.stock)} />
      </View>
      <View style={styles.description}>
        <Text style={styles.category}>{product.category}</Text>
        <Text>Available {product.availabilityStatus}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Icon
          source={require("../assets/icon_rating.png")}
          style={styles.ratingIcon}
        />
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Text>{product.rating} (Reviews Score)</Text>
        </TouchableOpacity>
        <ReviewsModal
          visible={modalOpen}
          onClose={() => setModalOpen(false)}
          reviews={product.reviews}
        />
      </View>
      <Text style={styles.subtitle}>Brand</Text>
      <Text style={styles.category}>{product.brand}</Text>
      <Text style={styles.subtitle}>Description</Text>
      <Text style={styles.category}>{product.description}</Text>
      <Text style={styles.subtitle}>Total Price</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.discountedPrice}>
          ${discountedPrice.toFixed(2)}
        </Text>
      </View>
      <AddToCartButton />
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 15,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ratingIcon: {
    width: 30,
    height: 30,
    tintColor: "orange",
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    maxWidth: "60%",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 7,
  },
  category: {
    fontSize: 14,
    color: COLORS.graySecondary,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  price: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: COLORS.graySecondary,
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductInfo;
