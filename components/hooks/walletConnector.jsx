import { useEffect, useState } from 'react';
import { useWeb3React, 
  UnsupportedChainIdError
} from "@web3-react/core"
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { injected, walletconnect } from "../wallet/connectors"

export const useWalletConnector = () => {
  const { activate, deactivate, active, error } = useWeb3React()
  const [ errorMsg, setErrorMsg ] = useState(null);

  useEffect(() => {
    if (error) {
      setErrorMsg(getErrorMessage(error));
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  function getErrorMessage(error) {
    if (error instanceof NoEthereumProviderError) {
      return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network. Try mainnet"
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect ||
      error instanceof UserRejectedRequestErrorFrame
    ) {
      return 'Please authorize this website to access your Ethereum account.'
    } else {
      console.error(error)
      return 'Something went wrong. Please try again / reload.'
    }
  }

  const connectToWallet = async () => {
    if (window.web3) {
      await activate(injected)
    } else {
      await activate(walletconnect);
    }
  }

  const disconnectWallet = async () => {
    try {
      await deactivate(injected)
    } catch (ex) {
      console.log(ex);
    }
  }
  
  return {connectToWallet, disconnectWallet, isConnected: active, errorMsg};
}