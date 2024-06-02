import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Button, Text, View } from "react-native";
import {
  createLinkOpenProps,
  createLinkTokenConfiguration,
} from "../utils/plaid";
import { create, open } from "react-native-plaid-link-sdk";

const Accounts = () => {
  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://localhost:4000/create-token", {
        method: "POST",
        body: JSON.stringify({}),
      });

      const d = await response.json();

      return d;
    },
  });

  const handleFirstLink = () => {
    mutateAsync();
  };

  React.useEffect(() => {
    console.log({ error });
  }, [error]);

  React.useEffect(() => {
    if (data?.link_token) {
      const tokenConfiguration = createLinkTokenConfiguration(data.link_token);
      create(tokenConfiguration);
    }
  }, [data?.link_token]);

  const handlePress = () => {
    const openProps = createLinkOpenProps();
    open(openProps);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>{isPending ? "Loading..." : "Loaded"}</Text>
      <Button title="Load data" onPress={handleFirstLink} />
      <Button
        title="Add Account"
        onPress={handlePress}
        disabled={!data?.link_token}
      />
    </View>
  );
};

export default Accounts;
