import Link from 'next/link'

export default function Footer(props) {
    return (
        <div className="pt-8 font-normal md:pt-28 font-forward">
            <div className="flex flex-col place-items-center">
                <div className="flex flex-col w-full bg-gray-400 place-items-center">
                    <div className="pt-6 text-base md:pt-10 md:text-3xl ">
                        DON'T MISS OUT
                    </div>

                    <div className="flex flex-row w-1/2 py-6 justify-evenly">
                        <div>
                            <a href={props.opensea} target="_blank">
                                <img src="/assets/Opensea.svg" className="w-8 md:w-12" />
                            </a>
                        </div>
                        <div>
                            <a href={props.twitter} target="_blank">
                                <img src="/assets/Twitter.svg" className="w-8 md:w-12" />
                            </a>
                        </div>
                        <div>
                            <a href={props.etherscan} target="_blank">
                                <img src="/assets/Etherscan.svg" className="w-8 md:w-12" />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="w-5/6 py-4 text-xs text-center font-roboto md:text-base md:py-10 lg:w-1/3">
                    2021 Copyrights © Duck Duck Goose. All rights reserverd.
                </p>
            </div>
        </div>
    )
}
