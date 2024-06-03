import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 3000);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
