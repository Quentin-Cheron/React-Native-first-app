import { Text, View, StyleSheet } from "react-native";
import Title from "../../components/Title";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Title title="About Us" />
      <Text>
        Save Lives est une application mobile qui a pour but de sauver des vies
        dans le monde. Nous faisons des donations pour aider les otaris à
        survivre dans leur environnement naturel. Nous avons besoin de votre
        aide pour continuer à sauver des vies. Merci pour votre soutien.
      </Text>

      <Text style={styles.title}>What happens to the donations?</Text>

      <Text>
        Les donations sont utilisées pour acheter de la nourriture et des
        médicaments pour les otaris. Nous travaillons avec des associations
        locales pour distribuer les donations aux otaris dans le besoin.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
});
