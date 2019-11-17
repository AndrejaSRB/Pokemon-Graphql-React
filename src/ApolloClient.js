import React from "react";
import App from "./App";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const Apollo = () => {
  const httpLink = new HttpLink({
    uri: "https://graphql-pokemon.now.sh"
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Apollo;
