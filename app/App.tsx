import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LinkConnect from "./src/components/LinkConnect";
import { usePlaidEmitter } from "react-native-plaid-link-sdk";

export default function App() {
  usePlaidEmitter((event) => {
    console.log(event);
  });

  return (
    <QueryClientProvider client={new QueryClient()}>
      <LinkConnect />
    </QueryClientProvider>
  );
}
