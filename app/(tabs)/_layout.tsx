import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  const { primary, secondary } = Colors;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primary[500],
        tabBarInactiveTintColor: secondary[400],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={25} name="home-filled" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={25} name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={25} name="star-border" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Bag"
        options={{
          title: "Bag",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={25} name="shopping-basket" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={25} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
