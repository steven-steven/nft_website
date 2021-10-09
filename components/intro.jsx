export default function Intro() {
    return (
        <div className="pt-8 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="pt-8 md:pt-20 text-xl md:text-5xl">DUCK DUCK GOOSE</div>

                <p className="font-robotoBold text-center text-xs md:text-xl pt-8 md:pt-20 w-2/3 lg:w-1/3">
                    Duck Duck Goose is a collection of uniquely generated 40x40 pixel art assets.
                    Only 10,000 Duck Duck Goose will exist, and each one of them can be officially owned
                    by a single person on the Ethereum blockchain. Follow the Duck Duck Goose and be rich today!
                </p>

                <p className="font-robotoBold text-center text-xs md:text-xl pt-8 md:pt-10 w-2/3 lg:w-1/3">
                    Each Duck Duck Goose is unique and generated from over 141 possible traits,
                    including backgrounds, bodies, eyewear, mouth, outfits, hands, and necklaces.
                </p>

                <img src="/assets/Jackpot.gif" className="pt-8 md:pt-20 w-2/3 lg:w-auto" />
            </div>
        </div>
    )
}