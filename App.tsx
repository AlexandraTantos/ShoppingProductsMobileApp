import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import { BasketProvider } from "./context/BasketContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <BasketProvider>
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </BasketProvider>
    </SafeAreaProvider>
  );
}
