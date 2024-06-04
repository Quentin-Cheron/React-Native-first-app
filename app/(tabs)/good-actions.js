import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

export default function GoodActionScreen() {
  const [goodAction, setGoodAction] = useState("");
  const [goodActionsList, setGoodActionsList] = useState([]);

  const handleAddGoodAction = () => {
    setGoodActionsList([
      ...goodActionsList,
      { key: Math.random().toString(), value: goodAction },
    ]);
    setGoodAction("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter good action"
          style={styles.input}
          onChangeText={setGoodAction}
          value={goodAction}
        />
        <Button color="#C36878" title="Add" onPress={handleAddGoodAction} />
      </View>
      <FlatList
        data={goodActionsList}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 50,
    gap: 20,
  },
  input: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "red",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
});
