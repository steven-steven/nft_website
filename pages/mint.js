import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import Head from 'next/head';
import { useContractConnector } from '../components/hooks/contractConnector'
import MintForm from '../components/mintForm';
import MintStatus from '../components/mintStatus';
import MintHeader from '../components/mintHeader';
import { useWalletConnector } from '../components/hooks/walletConnector'

export default function Mint() {

  const { connectToWallet, disconnectWallet, errorMsg } = useWalletConnector();
  const { active, account } = useWeb3React();
  const { mint, costPerMint, totalSupply, ownedDDG } = useContractConnector();
  const [ numToMint, setNumToMint ] = useState(1);
  const [ transactionHash, setTransactionHash ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ mintResult, setMintResult ] = useState(null);

  useEffect(() => {
    if (!active) {
      connectToWallet();
    }
  }, [active])

  useEffect(() => {
    return () => {
      disconnectWallet();
    };
  }, [])

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

  return (
    <div className="pb-3 flex flex-col min-h-screen bg-primary">
      <Head>
        <title>Duck Duck Goose</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MintHeader errorMsg={errorMsg} active={active} account={account}/>
      
      { active && (
        <>
          <MintStatus
            numToMint={numToMint}
            costPerMint={costPerMint}
            totalSupply={totalSupply}
            ownedDDG={ownedDDG}
            transactionHash={transactionHash}
            mintResult={mintResult}
          />
          <div className="w-full">
              <img src="/assets/Jackpot.gif" className="w-1/2 md:w-1/3 my-0 mx-auto" />
          </div>
          <MintForm 
            numToMint={numToMint} 
            setNumToMint={setNumToMint}
            handleMint={handleMint}
            loading={loading}
            mintCost={costPerMint && costPerMint * numToMint}
          />
        </>
      )}
    </div>
  )
}