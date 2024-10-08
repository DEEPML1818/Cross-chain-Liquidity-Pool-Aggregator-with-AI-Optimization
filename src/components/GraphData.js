// src/components/GraphData.js
import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

// Correct GraphQL query
const GET_TRANSACTIONS = gql`
  query {
    factories(first: 5) {
      id
      poolCount
      txCount
      totalVolumeUSD
    }
    bundles(first: 5) {
      id
      ethPriceUSD
    }
  }
`;

const GraphData = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  const [factories, setFactories] = useState([]);
  const [bundles, setBundles] = useState([]);

  // Update useEffect to correctly set data from the query
  useEffect(() => {
    if (data) {
      setFactories(data.factories); // setting factories
      setBundles(data.bundles); // setting bundles
    }
  }, [data]);

  // Error and loading checks
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data from The Graph</p>;

  return (
    <div>
      <h2>Factories Data</h2>
      <ul>
        {factories.map((factory) => (
          <li key={factory.id}>
            <p>Factory ID: {factory.id}</p>
            <p>Pool Count: {factory.poolCount}</p>
            <p>Tx Count: {factory.txCount}</p>
            <p>Total Volume (USD): {factory.totalVolumeUSD}</p>
          </li>
        ))}
      </ul>

      <h2>ETH Price from Bundles</h2>
      <ul>
        {bundles.map((bundle) => (
          <li key={bundle.id}>
            <p>Bundle ID: {bundle.id}</p>
            <p>ETH Price (USD): {bundle.ethPriceUSD}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphData;
