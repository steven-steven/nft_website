import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { injected } from "./wallet/connectors"
import DDGAbi from '../abis/ddg.json';

export const useWalletConnector = () => {
  const { activate, deactivate, active } = useWeb3React()

  const connectToWallet = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
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