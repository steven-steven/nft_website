import Marquee from "react-fast-marquee";

export default function Intro() {
    return (
        <div id="intro" className="pt-3 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="pt-8 md:pt-20 text-xl md:text-5xl">DUCK DUCK GOOSE</div>

                <p className="font-robotoBold text-center text-xs md:text-xl pt-8 md:pt-20 w-2/3 lg:w-1/3">
                    Duck Duck Goose is a collection of uniquely generated 40x40 pixel art assets.
                    Only <span className="text-danger">10,000</span> Duck Duck Goose will exist, and each one of them can be officially owned
                    by a single person on the Ethereum blockchain. Follow the Duck Duck Goose and be rich today!
                </p>

                <p className="font-robotoBold text-center text-xs md:text-xl pt-8 md:pt-10 w-2/3 lg:w-1/3">
                    Each Duck Duck Goose is unique and generated from over <span className="text-danger">135</span> possible traits,
                    including backgrounds, bodies, eyewear, mouth, outfits, hands, and necklaces.
                </p>

                <div className="pt-8 md:pt-20">
                    <Marquee gradientWidth={0} pauseOnHover={true} speed={50} >
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/1.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/2.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/3.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/4.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/5.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/6.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/7.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/8.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/9.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/10.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/11.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/12.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/13.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/14.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/15.png" />
                        <img className="w-32 h-32 md:w-64 md:h-64" src="/assets/examples/16.png" />
                    </Marquee>
                </div>

                <img src="/assets/Jackpot.gif" className="pt-8 md:pt-20 w-2/3 lg:w-auto" />

            </div>
        </div>
    )
}