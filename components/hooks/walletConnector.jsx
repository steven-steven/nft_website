import { useEffect } from 'react';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { injected } from "../wallet/connectors"

export const useWalletConnector = () => {
  const { activate, deactivate, active, error } = useWeb3React()

  const connectToWallet = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
    if (error instanceof UnsupportedChainIdError) {
      alert("Please make sure you are on mainnet");
    } else if (error) {
      alert("Something went wrong. Please try again / reload")
    }
  }

  const disconnectWallet = async () => {
    try {
      await deactivate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
  
  return {connectToWallet, disconnectWallet, isConnected: active};
}