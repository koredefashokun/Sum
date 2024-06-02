import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import {
  LinkExit,
  LinkIOSPresentationStyle,
  LinkLogLevel,
  LinkOpenProps,
  LinkSuccess,
  LinkTokenConfiguration,
  open,
  create,
  dismissLink,
} from "react-native-plaid-link-sdk";

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

function createLinkTokenConfiguration(
  token: string,
  noLoadingState: boolean = false,
): LinkTokenConfiguration {
  return {
    token: token,
    // Hides native activity indicator if true.
    noLoadingState: noLoadingState,
  };
}

function createLinkOpenProps(): LinkOpenProps {
  return {
    onSuccess: (success: LinkSuccess) => {
      // User was able to successfully link their account.
      console.log("Success: ", success);
    },
    onExit: (linkExit: LinkExit) => {
      // User exited Link session. There may or may not be an error depending on what occured.
      console.log("Exit: ", linkExit);
      dismissLink();
    },
    // MODAL or FULL_SCREEEN presentation on iOS. Defaults to MODAL.
    iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
    logLevel: LinkLogLevel.ERROR,
  };
}

export default LinkConnect;
