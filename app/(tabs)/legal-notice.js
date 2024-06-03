import { StyleSheet, Text, View } from "react-native";

export default function MentionsLegalScreen() {
  /* afficher une liste comme une vrai mention légal avec les titre 1, 2 , 3 etles ous titre 1.2 1.3 etc */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentions Légales</Text>
      <Text>1. Presentation du site</Text>
      <Text>1.1. Editeur</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>1.2. Directeur de la publication</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>1.3. Hébergeur</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>1.4. Développeur</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>2. Informations légales</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>2.1. Propriété</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>2.2. Responsabilité</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>2.3. Cookies</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>
        3. Conditions générales d'utilisation du site et des services proposés
      </Text>
      <Text>3.1. Utilisation du site</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>3.2. Limitations de responsabilité</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>3.3. Gestion des données personnelles</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>3.4. Liens hypertextes</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>4. Description des services fournis</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>4.1. Propriété intellectuelle</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>4.2. Responsabilité</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>4.3. Limitations de responsabilité</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
      <Text>4.4. Gestion des données personnelles</Text>
      <Text>Lorem Ipsum dolor sit amet</Text>
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
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#C36878",
  },
  text: {
    marginVertical: 20,
  },
});
