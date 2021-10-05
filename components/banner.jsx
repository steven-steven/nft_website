import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Web3 from 'web3'
import DDGAbi from '../abis/ddg.json'

export default function Banner() {

    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [totalSupply, setTotalSupply] = useState(0);
    const [colors, setColors] = useState([]);

    // load ethereum connection on render
    useEffect(async ()=>{
        await loadWeb3()
        await loadBlockchainData()
    })

    // given creature, mint send mint to the creature
    const mint = (color) => {
        contract.methods.mint(color).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            setColors([...colors, color])
        })
    }

    // load ethereum provider
    const loadWeb3 = async () => {
        if (window.ethereum) { // modern ethereum browser
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) { // metamask
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }
    
    // fetch new tokens
    const loadBlockchainData = async () => {
        const web3 = window.web3
        // Load account and get the first in the list
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
    
        const networkId = await web3.eth.net.getId()
        const networkData = DDG.networks[networkId]
        if(networkData) {
            // gets our contract
            const address = "0xF84F8Ee4C2A7Df74b7B18818dB9b14a36e12e56f"
            const contract = new web3.eth.Contract(DDGAbi, address)
            setContract(contract);
            const totalSupply = await contract.methods.totalSupply().call()
            setContract(totalSupply);
            // Load DDG
            for (var i = 1; i <= totalSupply; i++) {
                const color = await contract.methods.colors(i - 1).call()
                setColors([...colors, color]);
            }
        } else {
            window.alert('Smart contract not deployed to detected network.')
        }
    }


    return (
        <div className="pt-8 md:pt-28 font-forward font-normal">
            <div className="flex flex-row justify-center">
                <div className="pt-20 md:pt-32 w-3/6 text-center text-2xl md:text-7xl md:leading-loose table-caption">
                    <div>I WANT <span className="text-danger">YOU</span></div>
                    <div>TO BE RICH</div>
                    <div className="text-center pt-8 md:pt-20">
                        <Link href="{props.mint}">
                            <a>
                                <img src="/assets/Mint.svg" className="w-3/5 md:w-2/5 my-0 mx-auto" />
                            </a>
                        </Link>
                    </div>
                </div>
                <img src="/assets/Banner.svg" className="max-h-banner w-3/6" />
            </div>
        </div>
    )
}
