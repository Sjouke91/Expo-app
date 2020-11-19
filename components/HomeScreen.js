import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ route, navigation }) {
  useEffect(() => {
    if (route.params && route.params.count) {
      setCount(route.params.count);
    }
  }, [route.params]);

  const [count, setCount] = useState(1);
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Welcome to my awesome app!
      </Text>
      <Button
        title="Play Game"
        onPress={() =>
          navigation.navigate("Game", { screen: "Play", params: { count } })
        }
      />
      <Button
        title="Go to NewGame"
        onPress={() => navigation.navigate("New Game")}
      />
    </View>
  );
}
