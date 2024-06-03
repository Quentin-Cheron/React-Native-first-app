import { Tabs } from "expo-router";
import { Text } from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#C36878" />,
          header: () => (
            <Header
              leftComponent={{ text: "Home", style: { color: "#fff" } }}
              rightComponent={{ icon: "home", color: "#fff" }}
              containerStyle={{ backgroundColor: "#C36878" }}
            />
          ),
          tabBarActiveBackgroundColor: "#F6A0AE",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: () => <Ionicons name="heart" size={24} color="#C36878" />,
          header: () => (
            <Header
              leftComponent={{ text: "Donate", style: { color: "#fff" } }}
              rightComponent={{ icon: "favorite", color: "#fff" }}
              containerStyle={{ backgroundColor: "#C36878" }}
            />
          ),
          tabBarActiveBackgroundColor: "#F6A0AE",
          tabBarActiveTintColor: "#fff",
        }}
      />

      <Tabs.Screen
        name="information"
        options={{
          title: "Information",
          tabBarIcon: () => (
            <Ionicons name="information" size={24} color="#C36878" />
          ),
          header: () => (
            <Header
              leftComponent={{ text: "Info", style: { color: "#fff" } }}
              rightComponent={{ icon: "info", color: "#fff" }}
              containerStyle={{ backgroundColor: "#C36878" }}
            />
          ),
          tabBarActiveBackgroundColor: "#F6A0AE",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="legal-notice"
        options={{
          title: "Legal",
          tabBarIcon: () => (
            <Ionicons name="document-text" size={24} color="#C36878" />
          ),
          header: () => (
            <Header
              leftComponent={{ text: "Legal", style: { color: "#fff" } }}
              rightComponent={{ icon: "gavel", color: "#fff" }}
              containerStyle={{ backgroundColor: "#C36878" }}
            />
          ),
          tabBarActiveBackgroundColor: "#F6A0AE",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
