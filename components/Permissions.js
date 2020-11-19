import React from "react";
import { Button, Text, View, Platform } from "react-native";
import { Camera } from "expo-camera";
import { usePermissions } from "expo-permissions";

export default function Permissions() {
  const [permission, askForPermission] = usePermissions(Permissions.CAMERA, {
    ask: true,
  });

  if (!permission || permission.status !== "granted") {
    return (
      <View>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  return (
    <View>
      <Camera />
    </View>
  );
}
