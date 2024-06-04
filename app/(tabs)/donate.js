import { View, TextInput, StyleSheet, Button } from "react-native";
import Title from "../../components/Title";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function AccountScreen() {
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
  };
  return (
    <View style={styles.container}>
      <Title title="Donate" />
      <TextInput style={styles.input} placeholder="Amount" />
      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Expiration Date" />
      <TextInput style={styles.input} placeholder="Security Code" />
      <Button title="Donate" color="#C36878" />
      {/* <View>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
        </PayPalScriptProvider>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});
