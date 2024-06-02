import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";

type AccountStackParamList = {
  "Account.Main": undefined;
  "Account.Accounts": undefined;
};

const AccountStackNavigator =
  createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <AccountStackNavigator.Navigator>
      <AccountStackNavigator.Screen name="Account.Main" component={Account} />
    </AccountStackNavigator.Navigator>
  );
};

export default AccountStack;
