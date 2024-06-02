import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePlaidEmitter } from "react-native-plaid-link-sdk";

import Routes from "./src/navigation/Routes";

const App = () => {
  usePlaidEmitter((event) => {
    console.log(event);
  });

  return (
    <NavigationContainer>
      <QueryClientProvider client={new QueryClient()}>
        <Routes />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
