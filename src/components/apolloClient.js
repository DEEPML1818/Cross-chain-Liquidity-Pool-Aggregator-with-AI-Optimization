// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/YOUR_SUBGRAPH_NAME",
  }),
  cache: new InMemoryCache(),
});

export default client;
