import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import { open, create } from "react-native-plaid-link-sdk";
import {
  createLinkOpenProps,
  createLinkTokenConfiguration,
} from "../utils/plaid";

const LinkConnect = () => {
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
    <SafeAreaView>
      <View>
        <Text>{isPending ? "Loading..." : "Loaded"}</Text>
        <Button title="Load data" onPress={handleFirstLink} />
        <Button
          title="Connect Link (bad tautology)"
          onPress={handlePress}
          disabled={!data?.link_token}
        />
      </View>
    </SafeAreaView>
  );
};

export default LinkConnect;
