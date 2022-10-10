import React from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native-gesture-handler";
import navigation from "./src/navigation/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <navigation></navigation>
    </NavigationContainer>
  );
}