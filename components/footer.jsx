import Link from 'next/link'

export default function Footer(props) {
    return (
        <div className="pt-8 md:pt-28 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="flex flex-col place-items-center bg-gray-400 w-9/12 md:w-7/12">
                    <div className="pt-6 md:pt-10 text-base md:text-4xl ">
                        DON'T MISS OUT
                    </div>

                    <div className="py-6 md:py-10 flex justify-evenly flex-row w-1/2">
                        <div>
                            <Link href={props.opensea}>
                                <a>
                                    <img src="/assets/Opensea.svg" className="w-8 md:w-12" />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={props.twitter}>
                                <a>
                                    <img src="/assets/Twitter.svg" className="w-8 md:w-12" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="font-roboto text-center text-xs md:text-base py-4 md:py-10 w-5/6 lg:w-1/3">
                    2021 Copyrights © Duck Duck Goose. All rights reserverd.
                </p>
            </div>
        </div>
    )
}
