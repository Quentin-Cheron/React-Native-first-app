import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function GoodActionScreen() {
  const [goodAction, setGoodAction] = useState("");
  const [goodActionsList, setGoodActionsList] = useState([]);

  const handleAddGoodAction = () => {
    if (goodActionsList.findIndex((item) => item.value === goodAction) === -1) {
      setGoodActionsList([
        ...goodActionsList,
        { key: Math.random(), value: goodAction },
      ]);
    } else {
      alert("This action already exists");
    }
    setGoodAction("");
  };

  const handleDeleteGoodAction = (e) => {
    setGoodActionsList(goodActionsList.filter((item) => item.value !== e));
  };

  return (
    <ScrollView>
      <View style={styles.group}>
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
              <Button
                title="Supprimer"
                onPress={() => handleDeleteGoodAction(itemData.item.value)}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  group: {
    width: "80%",
    margin: "auto",
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
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
});
