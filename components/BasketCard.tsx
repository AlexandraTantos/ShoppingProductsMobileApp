import { View, Text, StyleSheet, Image } from "react-native";
import { BasketItem } from "../context/BasketContext";
import Counter from "./Counter";
import { COLORS } from "../constants";
import DeleteButton from "./DeleteButton";

type Props = {
  item: BasketItem;
  onQuantityChange: (id: number, newQty: number) => void;
  onDelete: (id: number) => void;
};

const BasketCard = ({ item, onQuantityChange, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.deleteButtonOverlay}>
          <DeleteButton onPress={() => onDelete(item.id)} />
        </View>
        <View style={styles.counterOverlay}>
          <Counter
            stock={item.stock}
            value={item.quantity}
            onChange={(qty) => onQuantityChange(item.id, qty)}
          />
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
        </View>

        <Text style={styles.total}>
          ${(item.discountedPrice * item.quantity).toFixed(2)}
        </Text>
      </View>
      <Text style={styles.brand}>{item.brand}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  container: {
    alignSelf: "center",
    marginBottom: 20,
    width: 350,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 15,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  deleteButtonOverlay: {
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: 15,
  },
  imageContainer: {
    position: "relative",
    height: 150,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 120,
    alignSelf: "center",
    borderRadius: 20,
  },
  counterOverlay: {
    position: "absolute",
    bottom: 5,
    left: 5,
    borderRadius: 10,
    padding: 2,
  },
  infoContainer: {
    flex: 1,
    paddingRight: 5,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  brand: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  total: {
    fontWeight: "600",
    flexShrink: 0,
  },
});

export default BasketCard;
