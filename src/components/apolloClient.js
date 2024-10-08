import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gateway.thegraph.com/api/a07feb433266805eb7d36b8923699660/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
  cache: new InMemoryCache(),
});

export default client;
