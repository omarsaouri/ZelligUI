import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "../ZelligUI/src/index.ts";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View tw="flex-1 items-center justify-center bg-white-500">
      <Button
        title="Add"
        textColor="white"
        fontSize={18}
        backgroundColor="black"
      />
      <StatusBar style="auto" />
    </View>
  );
}
