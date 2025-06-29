import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasketIcon from "../components/BasketIcon";
import HomeIcon from "../components/HomeIcon";
import BasketScreen from "../screens/BasketScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreen, { Product } from "../screens/ProductsScreen";
import ContactScreen from "../screens/ContactScreen";

export type TabStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Basket: NavigatorScreenParams<BasketStackParamList>;
};

const Tab = createBottomTabNavigator<TabStackParamList>();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: HomeIcon }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Basket"
        options={{ tabBarIcon: BasketIcon }}
        component={BasketStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductsScreen: { query: string };
  ProductDetailsScreen: { product: Product };
};
export type BasketStackParamList = {
  BasketScreen: undefined;
  ContactScreen: undefined;
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
const BasketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
    </Stack.Navigator>
  );
};
