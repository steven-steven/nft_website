import Image from 'next/image'
import Link from 'next/link'

export default function Header(props) {
  return (
    <div className="flex flex-row items-center justify-between pt-4 font-normal md:pt-11 font-forward">
      <div className="table-caption w-1/4 pt-3 pl-8 text-sm text-center sm:pl-0 md:text-4xl">
        <div className="block py-1.5">DUCK</div>
        <div className="block py-1.5">DUCK</div>
        <div className="block py-1.5">GOOSE</div>
      </div>

      <div className="flex-row flex-grow hidden sm:flex justify-evenly">
        <div className="text-xs md:text-2xl">
          <a href="#intro">INTRO</a>
        </div>
        <div className="text-xs md:text-2xl">
          <a href="#roadmap">ROADMAP</a>
        </div>
      </div>

      <div className="flex flex-wrap w-32 flex-end justify-evenly md:flex-row md:flex-nowrap md:w-1/4">
        <div className="w-1/3 md:w-auto">
          <a href={props.opensea} target="_blank">
            <img src="/assets/Opensea.svg" className="w-8 pb-4 sm:w-10 md:w-12" />
          </a>
        </div>
        <div className="w-1/3 md:w-auto">
          <a href={props.twitter} target="_blank">
            <img src="/assets/Twitter.svg" className="w-8 sm:w-10 md:w-12" />
          </a>
        </div>
        <div className="w-1/3 md:w-auto">
          <a href={props.etherscan} target="_blank">
            <img src="/assets/Etherscan.svg" className="w-8 sm:w-10 md:w-12" />
          </a>
        </div>
      </div>
    </div>
  )
}
