import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { COLORS, STYLES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/TabNavigator";

type obj = { item: string };

const HomeScreen = () => {
  const { data, error, isLoading } = useFetch<string[]>({
    endpoint: "products/category-list",
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const renderItem = ({ item }: obj) => {
    return (
      <TouchableOpacity
        key={item}
        style={styles.item}
        onPress={() => navigation.navigate("ProductsScreen", { query: item })}
      >
        <View style={styles.innerItem}>
          <Text style={styles.text}>{item}</Text>
          <View style={styles.dot} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={styles.title}>Categories</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
      {/* {data?.map((item) => (
        <Text key={item}>{item}</Text>
      ))} */}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
  },
  innerItem: {
    backgroundColor: COLORS.black,
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  category: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 0,
    alignItems: "center",
  },
  title: {
    ...STYLES.textPrimary,
    marginVertical: 10,
  },

  dot: {
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    width: 30,
  },

  text: {
    color: COLORS.white,
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default HomeScreen;
