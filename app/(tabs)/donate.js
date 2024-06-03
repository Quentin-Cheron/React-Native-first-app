import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import Title from "../../components/Title";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Title title="Donate" />
      <TextInput style={styles.input} placeholder="Amount" />
      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Expiration Date" />
      <TextInput style={styles.input} placeholder="Security Code" />
      <Button title="Donate" color="#C36878" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#C36878",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    marginBottom: 30,
    paddingLeft: 10,
  },
});
