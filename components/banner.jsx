import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className="pt-28 px-32 font-forward font-normal">
            <div className="flex flex-row justify-center">
                <div className="pt-32 text-7xl table-caption">
                    <div className="block py-5">I WANT <span className="text-danger">YOU</span></div>
                    <div className="block py-5">TO BE RICH</div>
                    <div className="pt-20 pl-8">
                        <Link href="https://about:blank">
                            <a>
                                <Image src="/assets/Mint.svg" height="98" width="400" />
                            </a>
                        </Link>
                    </div>
                </div>
                <Image src="/assets/Banner.svg" height="663" width="484" />
            </div>


        </div>
    )
}
