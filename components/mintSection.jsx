import { useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { injected } from "./wallet/connectors"
import DDGAbi from '../abis/ddg.json';

export default function MintSection() {
  const [ numToMint, setNumToMint ] = useState(1);
  const incCounter = () => {
    if (numToMint < 10000) setNumToMint(numToMint+1);
  }
  const decCounter = () => {
    if (numToMint > 1) setNumToMint(numToMint-1);
  }

  const { active, account, library, connector, error } = useWeb3React();

  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

  async function mint() {
    try {
      const address = "0x915397b94B821D231a2f55eC0B38605D4206B3b1"; //contract address
      console.log(library);
      const costPerMint = 10000000000000000;
      const contract = new library.eth.Contract(DDGAbi, address);
      const result = await contract.methods.mintNewDDG(numToMint).send({from: account, value: costPerMint * numToMint})
      console.log("minted");
      console.log("transaction hash: " + result.transactionHash);
      return result.status;
    } catch (ex) {
      console.log(ex)
    }
  }

  if (isUnsupportedChainIdError) return (<p>Please make sure you are on mainnet</p>)
  if (!active) return null;

  return (
    <div className="border-dashed border-4 border-black mt-8 flex flex-col items-center justify-center">
      <div>Connected with <b>{account}</b></div>

      <div class="w-48">
        <label for="mint-number" class="w-full text-gray-700 text-sm font-semibold">
          Counter Input
        </label>
        <div class="flex h-10 w-full rounded-lg relative mt-1">
          <button onClick={decCounter} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input 
            type="number" 
            class="appearance-none outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-500"
            name="mint-number"
            value={numToMint}
            onChange={(e)=>{setNumToMint(e.target.value)}}>
          </input>
          <button onClick={incCounter} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>

      
      <button onClick={mint} className="py-2 mb-4 text-lg border-2 border-black font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Mint</button>
    </div>
  )
}