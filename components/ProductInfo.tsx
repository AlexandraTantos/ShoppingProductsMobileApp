import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import { COLORS } from "../constants";
import { useBasket } from "../hooks/useBasket";
import { Product } from "../screens/ProductsScreen";
import { getDiscountedPrice } from "../utils/priceUtils";
import ActionButton from "./ActionButton";
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
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: discountedPrice,
      quantity: quantity,
      brand: product.brand,
      image: product.thumbnail,
      stock: Number(product.stock),
    };
    addToBasket(item);
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.description}>
        <Text style={styles.title}>{product.title}</Text>
        <Counter
          stock={Number(product.stock)}
          value={quantity}
          onChange={setQuantity}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.category}>{product.category}</Text>

        <Text>{product.availabilityStatus}</Text>
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
      <ActionButton
        text="Add to cart"
        icon={require("../assets/icon_shopping.png")}
        onPress={handleAddToBasket}
        iconPosition="left"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 15,
    height: 480,
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
