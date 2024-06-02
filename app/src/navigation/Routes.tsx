import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import { AppStackParamList } from "./types";

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={MainTab} />
    </AppStack.Navigator>
  );
};

export default Routes;
