// src/components/WorldcoinAuth.js
import React from "react";
import { WorldIDWidget } from "@worldcoin/id";

const WorldcoinAuth = ({ onSuccess }) => {
  const handleSuccess = (verificationResponse) => {
    onSuccess(verificationResponse);
  };

  return (
    <div>
      <h2>Worldcoin Verification</h2>
      <WorldIDWidget
        actionId="YOUR_ACTION_ID" // Get this from Worldcoin Developer Dashboard
        signal="user_login"
        enableTelemetry={true}
        onSuccess={handleSuccess}
        onError={(error) => console.error(error)}
      />
    </div>
  );
};

export default WorldcoinAuth;
