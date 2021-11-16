import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { useContractConnector } from './hooks/contractConnector'
import Constant from './constants';

export default function MintStatus({
  costPerMint,
  totalSupply,
  ownedDDG,
  numToMint,
  transactionHash,
  mintResult,
}) {
  return (
    <div className="p-4 m-8 border-dashed border-4 border-black">
      STATUS:
      <ul className="pl-8 list-disc">
        {/* <li># of DDG sold: {totalSupply} / 10 000</li> */}
        <li># of DDG you own: {ownedDDG}</li>
      </ul>
      { (transactionHash || mintResult) && (<div className="pt-3">RESPONSE:</div>)}
      <ul className="pl-8 list-disc">
        { transactionHash && (
          <li>TransactionHash:&nbsp;
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank" 
              href={`https://etherscan.io/tx/${transactionHash}`}
            >
              {transactionHash} 
            </a>
          </li>
        )}
        { mintResult && (
          <li>Result: {mintResult}</li>
        )}
      </ul>
    </div>
  )
}