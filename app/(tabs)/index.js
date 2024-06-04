import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={
          "https://sauverdesvies.org/wp-content/uploads/2018/05/13_D16277.png"
        }
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
