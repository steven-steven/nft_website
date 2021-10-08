import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { injected } from "./wallet/connectors"
import DDGAbi from '../abis/ddg.json';

export default function WalletConnection() {
  const { active, account, library, connector, activate, deactivate, error } = useWeb3React()

  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

  const connect = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  async function mint() {
    try {
      const address = "0x915397b94B821D231a2f55eC0B38605D4206B3b1"
      console.log(library);
      const contract = new library.eth.Contract(DDGAbi, address);
      const result = await contract.methods.mintNewDDG(1).send({from: account, value: 10000000000000000})
      console.log("minted");
      console.log("transaction hash: " + result.transactionHash);
      return result.status;
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
      {active ? (
        <div>
          <span>Connected with <b>{account}</b></span>
          <button onClick={mint} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Mint</button>
        </div>
      ) : (
        <span>Not connected</span>
      )}
      { isUnsupportedChainIdError && <p>Please make sure you are on mainnet</p> }
      <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
    </div>
  )
}