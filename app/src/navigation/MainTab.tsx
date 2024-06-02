import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AccountStack from "./AccountStack";

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

const MainTabNavigator = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen name="Home" component={Home} />
      <MainTabNavigator.Screen
        name="Account"
        component={AccountStack}
        options={{ headerShown: false }}
      />
    </MainTabNavigator.Navigator>
  );
};

export default MainTab;
