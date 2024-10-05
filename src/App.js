// src/App.js
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import WorldcoinAuth from "./components/WorldcoinAuth";
import GraphData from "./components/GraphData";
import TLSNotary from "./components/TLSNotary";
import client from "./components/apolloClient";

function App() {
  const [verified, setVerified] = useState(false);
  const handleWorldcoinSuccess = (response) => {
    console.log("Worldcoin verification successful:", response);
    setVerified(true);
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <GraphData />
        <TLSNotary />
        <h1>Welcome to the dApp</h1>
        {verified ? (
          <>
            <p>User successfully verified with Worldcoin!</p>
           
          </>
        ) : (
          <WorldcoinAuth onSuccess={handleWorldcoinSuccess} />
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
