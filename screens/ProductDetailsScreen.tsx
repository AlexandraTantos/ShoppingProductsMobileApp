import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
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
  SafeAreaView,
} from "react-native";
import { COLORS } from "../constants";
import Icon from "../components/Icon";
import { useState } from "react";
import Counter from "../components/Counter";
import AddToCartButton from "../components/AddToCartButton";
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
