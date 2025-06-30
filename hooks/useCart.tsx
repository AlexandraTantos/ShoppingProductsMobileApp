// import { useState } from "react";
// import { Product } from "../screens/ProductsScreen";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const useCart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>();
//   const [error, setError] = useState<string>();

//   const addToCart = async (item: Product, quantity: number) => {
//     try {
//       const cart: Product[] = [...cartItems];
//       const existingItem = cart.find(
//         (cartItem: Product) => cartItem.id === item.id
//       );
//       if (existingItem?.quantity) {
//         existingItem.quantity += quantity;
//       } else {
//         item.quantity = quantity;
//         cart.push(item);
//       }
//       await AsyncStorage.setItem("cart", JSON.stringify(cart));
//     } catch (error) {}
//   };

//   return { addToCart, removeFromCart, clearCart, cartItems, error, loading };
// };
// export default useCart;
