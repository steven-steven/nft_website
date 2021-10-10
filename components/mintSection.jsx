import { useState } from 'react'
import { useWeb3React } from "@web3-react/core"
import { useContractConnector } from './hooks/contractConnector'
import Constant from './constants';

export default function MintSection() {
  const { mint, costPerMint, totalSupply, ownedDDG } = useContractConnector();
  const { active, account } = useWeb3React();

  const [ numToMint, setNumToMint ] = useState(1);
  const [ transactionHash, setTransactionHash ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ mintResult, setMintResult ] = useState(null);

  const incCounter = () => {
    if (numToMint < 10000) setNumToMint(numToMint+1);
  }
  const decCounter = () => {
    if (numToMint > 1) setNumToMint(numToMint-1);
  }

  const handleMint = async () => {
    try { 
      await mint(numToMint).on('sent', function(){
        setLoading(true);
      }).on('transactionHash', function(hash){
        setTransactionHash(hash);
      }).on('receipt', function(receipt){
        console.log(receipt)
      }).on('confirmation', function(confirmatioNumber, receipt){
        if (receipt && receipt.status == true) {
          setMintResult("Successful! 🎉")
        }
      }).on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        setMintResult("Transaction failed 😢. Please check the link above to view the transaction for more details.");
      });
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false);
    }
  }

  if (!active) return null;

  return (
    <div className="p-8 border-dashed border-4 border-black mt-8 flex flex-col items-center justify-center">
      <div>Connected</div>

      <p className="text-lg mt-3"> Status </p>
      <ul>
        <li>Your account: {account}</li>
        <li>Minting cost: {costPerMint && costPerMint * numToMint}</li> 
        <li>Supply: {totalSupply} / 10 000</li>
        <li>You currently own {ownedDDG} DDG NFT</li>
      </ul>
      <br/>

      <div className="w-48">
        <label htmlFor="mint-number" className="w-full text-gray-700 text-sm font-semibold">
          Counter Input
        </label>
        <div className="flex space-x-1 h-10 w-full rounded-lg relative mt-1">
          <button onClick={decCounter} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input 
            type="number" 
            className="appearance-none outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-500"
            name="mint-number"
            value={numToMint}
            onChange={(e)=>{setNumToMint(parseFloat(e.target.value))}}>
          </input>
          <button onClick={incCounter} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>

      <button type="button" onClick={handleMint} className="mt-3 w-52 inline-flex items-center border-2 border-black px-4 py-2 text-base leading-6 font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
        { loading && <svg className="absolute animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> }
        <span className="flex-1 text-center">Mint</span>
      </button>

      <br/>
      <div>
        { transactionHash && (
          <>
            <p> <b> TransactionHash</b>:&nbsp; 
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank" 
              href={`${Constant.ETHERSCAN}tx/${transactionHash}`}
            >
              {transactionHash} 
            </a> </p>
          </>
        )}
        { mintResult && (
          <p> <b> Result</b>: {mintResult}</p>
        )}
      </div>
    </div>
  )
}