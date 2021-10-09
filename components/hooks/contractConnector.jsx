import { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import DDGAbi from '../../abis/ddg.json';
import Constant from '../constants'

export const useContractConnector = () => {
  const { library, account } = useWeb3React();
  const [ connectedContract, setConnectedContract ] = useState(null);
  const [ costPerMint, setCostPerMint ] = useState(null);
  const [ totalSupply, setTotalSupply ] = useState(null);
  const [ ownedDDG, setOwnedDDG ] = useState(null);

  useEffect(async () => {
    if (!library) return;

    // get contract
    const contract = new library.eth.Contract(DDGAbi, Constant.CONTRACT_ADDRESS);
    setConnectedContract(contract);

    // query for cost of mint
    const price = await contract.methods.calculatePrice(1).call();
    setCostPerMint(library.utils.fromWei(price));

    // query for supply
    const supply = await contract.methods.totalSupply().call();
    setTotalSupply(supply);

    // query for how much owned ddg
    const balance = await contract.methods.balanceOf(account).call();
    setOwnedDDG(balance);
  }, [library]);
  
  const mint = (numToMint) => {
    if (!connectedContract) return null;

    const costInWei = library.utils.toWei(`${costPerMint * numToMint}`);

    return connectedContract.methods
      .mintNewDDG(numToMint)
      .send({from: account, value: library.utils.toBN(costInWei) });
  }

  return {mint, costPerMint, totalSupply, ownedDDG};
}