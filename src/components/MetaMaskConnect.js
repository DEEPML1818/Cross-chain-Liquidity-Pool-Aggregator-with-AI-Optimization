// src/components/MetaMaskConnect.js
import React, { useState } from "react";
import { ethers } from "ethers";

const MetaMaskConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum); // Updated to BrowserProvider
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? "Wallet Connected" : "Connect MetaMask"}
      </button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </div>
  );
};

export default MetaMaskConnect;
