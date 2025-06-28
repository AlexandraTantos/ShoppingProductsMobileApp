import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { HomeStackParamList } from "../navigation/TabNavigator";

import ProductImagesCarousel from "../components/ProductImagesCarousel";
import ProductInfo from "../components/ProductInfo";

type ProductDetailsScreenProp = RouteProp<
  HomeStackParamList,
  "ProductDetailsScreen"
>;

const ProductDetailsScreen = () => {
  const route = useRoute<ProductDetailsScreenProp>();

  return (
    <ScrollView style={{ position: "relative" }}>
      <ProductImagesCarousel images={route.params.product.images || []} />
      <ProductInfo product={route.params.product} />
    </ScrollView>
  );
};

export default ProductDetailsScreen;
