
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1], //mainnet = 1. rinkeby= 4
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: process.env.NEXT_PUBLIC_WALLET_CONNECT_INFURA }, // change this to prod
  qrcode: true
})