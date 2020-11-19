// src / App.js;

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         height: "100%",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-around",
//       }}
//     >
//       <View
//         style={{
//           width: "20%",
//           height: "20%",
//           backgroundColor: "rebeccapurple",
//         }}
//       />
//       <View
//         style={{
//           width: "50%",
//           height: "20%",
//           backgroundColor: "crimson",
//         }}
//       />
//       <View style={{ height: "20%", width: "80%", backgroundColor: "gold" }} />
//     </View>
//   );
// }

// App.js

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import GameScreen from "./src/screens/GameScreen";
// import HomeScreen from "./components/HomeScreen";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Game" component={GameScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// src / App.js;
// import React from "react";
// import GameScreen from "./screens/GameScreen";

// export default function App() {
//   return <GameScreen />;
// }

// import React, { useRef, useState } from "react";
// import {
//   Text,
//   View,
//   ActivityIndicator,
//   Image,
//   Button,
//   Alert,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   KeyboardAvoidingView,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";

// function MyHeader() {
//   return (
//     <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
//       <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
//         Hello React Native
//       </Text>
//       <ActivityIndicator
//         size="large"
//         color="#c1262c"
//         style={{ marginBottom: 30 }}
//       />
//     </View>
//   );
// }

// function MyFooter() {
//   const [text, setText] = useState("");
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     inner: {
//       padding: 24,
//       flex: 1,
//       justifyContent: "space-around",
//     },
//     header: {
//       fontSize: 36,
//       marginBottom: 48,
//     },
//     textInput: {
//       height: 40,
//       borderColor: "#000000",
//       borderBottomWidth: 1,
//       marginBottom: 36,
//     },
//     btnContainer: {
//       backgroundColor: "white",
//       marginTop: 12,
//     },
//   });
//   return (
//     <View
//       style={{
//         borderWidth: 2,
//         borderColor: "black",
//         padding: 20,
//         marginBottom: 30,
//       }}
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS == "ios" ? "padding" : "height"}
//         style={styles.container}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View style={styles.inner}>
//             <Text style={styles.header}>Header</Text>
//             <TextInput placeholder="Username" style={styles.textInput} />
//             <View style={styles.btnContainer}>
//               <Button title="Submit" onPress={() => null} />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//       <Button
//         onPress={() => Alert.alert(text)}
//         title="Repeat"
//         color="#c1262c"
//       />
//     </View>
//   );
// }

// export default function App() {
//   const randomNum = useRef(Math.random()).current;

//   return (
//     <FlatList
//       ListHeaderComponent={MyHeader}
//       data={[0, 1, 2, 3, 4]}
//       renderItem={({ item }) => {
//         return (
//           <TouchableOpacity
//             onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
//           >
//             <Image
//               source={{
//                 uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
//               }}
//               style={{ width: "100%", height: 160, marginBottom: 30 }}
//             />
//           </TouchableOpacity>
//         );
//       }}
//       keyExtractor={(item) => String(item)}
//       ListFooterComponent={MyFooter}
//     />
//   );
// }

// App.js

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import GameScreen from "./screens/GameScreen";
// import HomeScreen from "./Components/HomeScreen";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//           headerTintColor: "#fff",
//           headerTitleAlign: "center",
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: "Welcome!" }}
//         />
//         <Stack.Screen name="Game" component={GameScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import GameScreen from "./screens/GameScreen";
// import NewGame from "./components/Game";
// import SomeScreen from "./components/HomeScreen";
// import AboutScreen from "./components/AboutScreen";

// const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();

// function GameTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Play" component={GameScreen} />
//       <Tab.Screen name="About" component={AboutScreen} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//           headerTintColor: "#fff",
//           headerTitleAlign: "center",
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Game" component={GameTabs} />
//         <Stack.Screen name="New Game" component={SomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import SpeakUp from "./components/Game";
import ImagePickerExample from "./components/ImagePicker";
import GetPedometer from "./components/Pedometer";
import Permissions from "./components/Permissions";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button
        title="Go to NewGame"
        onPress={() => navigation.navigate("SpeakUp")}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Camera" component={SpeakUp} />
        <Drawer.Screen name="Image picker" component={ImagePickerExample} />
        <Drawer.Screen name="Pedometer" component={GetPedometer} />
        <Drawer.Screen name="Permissions" component={Permissions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
