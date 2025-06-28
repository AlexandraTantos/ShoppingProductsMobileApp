import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../navigation/TabNavigator";
import useFetch from "../hooks/useFetch";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { COLORS } from "../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getDiscountedPrice } from "../utils/priceUtils";
import BackButton from "../components/BackButton";

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
export type Product = {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  quantity?: number;
  images: string[];
  reviews: Review[];
  rating: number;
  thumbnail: string;
  stock: string;
  title: string;
  price: number;
  availabilityStatus: string;
};

type Products = {
  products: Product[];
};

type ProductsScreenProp = RouteProp<HomeStackParamList, "ProductsScreen">;

const ProductsScreen = () => {
  const route = useRoute<ProductsScreenProp>();
  const { data, error, isLoading } = useFetch<Products>({
    endpoint: `products/category/${route.params.query}`,
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const renderItem = ({ item }: { item: Product }) => {
    const discountedPrice = getDiscountedPrice(
      item.price,
      item.discountPercentage
    );

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("ProductDetailsScreen", { product: item })
        }
      >
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productBrand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.discountedPrice}>
          ${discountedPrice.toFixed(2)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 70 }}>
              <Text style={styles.title}>{route.params.query}</Text>
              <FlatList
                data={data.products}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={{ justifyContent: "space-between" }}
              />
            </View>
          )}
          {error && <Error error={error} />}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flatListContent: {
    gap: 10,
  },

  title: {
    color: COLORS.black,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productBrand: {
    fontSize: 12,
    color: COLORS.graySecondary,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: "line-through",
    color: COLORS.graySecondary,
  },
  container: {
    justifyContent: "space-between",
    width: "48%",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
    alignContent: "center",
  },
  discountedPrice: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
});
export default ProductsScreen;
