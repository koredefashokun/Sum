import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";
import { AccountStackParamList } from "./types";
import Accounts from "../screens/Accounts";

const AccountStackNavigator =
  createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <AccountStackNavigator.Navigator>
      <AccountStackNavigator.Screen
        name="Account.Main"
        component={Account}
        options={{ headerTitle: "Account" }}
      />
      <AccountStackNavigator.Screen
        name="Account.Accounts"
        component={Accounts}
      />
    </AccountStackNavigator.Navigator>
  );
};

export default AccountStack;
