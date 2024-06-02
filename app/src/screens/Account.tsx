import React from "react";
import { Pressable, View, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { AccountStackParamList } from "../navigation/types";

const Account = () => {
  const { navigate } = useNavigation<NavigationProp<AccountStackParamList>>();

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => navigate("Account.Accounts")}>
        <Text>Accounts</Text>
      </Pressable>
    </View>
  );
};

export default Account;
