import Link from 'next/link'

export default function Banner() {
    
    // mint button
    const walletButton = () => (
        <div className="h-16 md:h-28">
            <Link href='/mint'>
                <button className="bg-contain w-36 h-16 md:w-64 md:h-28 bg-no-repeat bg-mint-button hover:mt-3 hover:bg-mint-button-hover"/>
            </Link>
        </div>
    );

    const disabledButton = () => (
        <div className="h-16 md:h-28">
            <button onClick={() => alert('Coming soon. Follow us on social media to get the latest updates!')}
                className="bg-contain w-36 h-16 md:w-64 md:h-28 bg-no-repeat bg-mint-button-disabled" 
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
                        {disabledButton()}
                    </div>
                </div>
                <img src="/assets/Banner.svg" className="max-h-banner w-1/3" />
            </div>
        </div>
    )
}
