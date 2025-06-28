import { ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import BackButton from "./BackButton";

type Props = {
  images: string[];
};

const ProductImagesCarousel = ({ images }: Props) => {
  const navigation = useNavigation();

  return (
    <>
      <BackButton />
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.image} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    height: 250,
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: "contain",
    marginRight: 10,
    borderRadius: 10,
  },
});

export default ProductImagesCarousel;
