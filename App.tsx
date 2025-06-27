import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
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
  );
}
