import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
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
