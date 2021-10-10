export default function Intro() {
    return (
        <div id="intro" className="pt-8 font-forward font-normal">
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

                <div className="pt-8 md:pt-20 grid grid-cols-3 w-2/3 lg:w-1/3">
                    <img src="/assets/examples/1.png" />
                    <img src="/assets/examples/2.png" />
                    <img src="/assets/examples/3.png" />
                    <img src="/assets/examples/4.png" />
                    <img src="/assets/examples/5.png" />
                    <img src="/assets/examples/6.png" />
                    <img src="/assets/examples/7.png" />
                    <img src="/assets/examples/8.png" />
                    <img src="/assets/examples/9.png" />
                </div>

                <img src="/assets/Jackpot.gif" className="pt-8 md:pt-20 w-2/3 lg:w-auto" />

            </div>
        </div>
    )
}