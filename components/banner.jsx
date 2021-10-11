import { useWalletConnector } from './hooks/walletConnector'

export default function Banner() {
    const { connectToWallet, disconnectWallet, isConnected, errorMsg } = useWalletConnector();

    const walletButton = () => (
        <div className="h-16 md:h-28">
            <button onClick={isConnected ? disconnectWallet : connectToWallet}
                className="bg-contain w-36 h-16 md:w-64 md:h-28 bg-no-repeat bg-mint-button hover:mt-3 hover:bg-mint-button-hover" 
            />
        </div>
    );
    
    return (
        <div className="pt-8 md:pt-18 font-forward font-normal">
            <div className="flex items-stretch justify-center">
                <div className="flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-7xl leading-loose md:leading-loose lg:leading-loose">
                    <div>I WANT <span className="text-danger">YOU</span></div>
                    <div>TO BE RICH</div>
                    <div className="text-center  my-0 mx-auto mt-3">
                        {walletButton()}
                        {!!errorMsg && <p className="mt-3 text-base font-sans text-red-800">Error: {errorMsg}</p> }
                    </div>
                </div>
                <img src="/assets/Banner.svg" className="max-h-banner w-1/3" />
            </div>
        </div>
    )
}
