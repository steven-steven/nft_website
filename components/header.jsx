import Image from 'next/image'
import Link from 'next/link'

export default function Header(props) {
  return (
    <div className="flex flex-row pt-4 md:pt-11 font-forward font-normal items-center">
      <div className="w-1/4 pt-3 text-2xl md:text-4xl table-caption text-center">
        <div className="block py-1.5">DUCK</div>
        <div className="block py-1.5">DUCK</div>
        <div className="block py-1.5">GOOSE</div>
      </div>

      <div className="flex flex-row flex-grow justify-evenly">
        <div className="text-xs md:text-2xl">
          <a href="#intro">INTRO</a>
        </div>
        <div className="text-xs md:text-2xl">
          <a href="#roadmap">ROADMAP</a>
        </div>
      </div>

      <div className="flex justify-evenly md:flex-row flex-wrap md:flex-nowrap w-32 md:w-1/4">
        <div className="w-1/2 md:w-auto">
          <a href={props.opensea} target="_blank">
            <img src="/assets/Opensea.svg" className="pb-4 w-10 md:w-12" />
          </a>
        </div>
        <div className="w-1/2 md:w-auto">
          <a href={props.discord} target="_blank">
            <img src="/assets/Discord.svg" className="w-10 md:w-12" />
          </a>
        </div>
        <div className="w-1/2 md:w-auto">
          <a href={props.twitter} target="_blank">
            <img src="/assets/Twitter.svg" className="w-10 md:w-12" />
          </a>
        </div>
        <div className="w-1/2 md:w-auto">
          <a href={props.etherscan} target="_blank">
            <img src="/assets/Etherscan.svg" className="w-10 md:w-12" />
          </a>
        </div>
      </div>
    </div>
  )
}
