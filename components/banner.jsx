import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useWalletConnector } from './walletConnector'

export default function Banner() {
    const { connectToWallet, disconnectWallet, isConnected } = useWalletConnector();

    const walletButton = () => (
        <button onClick={isConnected ? disconnectWallet : connectToWallet}
            className="bg-contain w-48 md:w-64 h-20 bg-no-repeat bg-mint-button" 
        />
    );
    
    return (
        <div className="pt-8 md:pt-28 font-forward font-normal">
            <div className="flex items-stretch justify-center">
                <div className="flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-7xl leading-loose md:leading-loose lg:leading-loose">
                    <div>I WANT <span className="text-danger">YOU</span></div>
                    <div>TO BE RICH</div>
                    <div className="text-center my-0 mx-auto mt-3">
                        {walletButton()}
                    </div>
                </div>
                <img src="/assets/Banner.svg" className="max-h-banner w-1/3" />
            </div>
        </div>
    )
}
