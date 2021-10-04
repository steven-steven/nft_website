import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-row md:pt-28 font-forward font-normal items-center">
      <div className="w-1/4 text-xl md:text-4xl table-caption text-center">
        <div class="block py-1.5">DUCK</div>
        <div class="block py-1.5">DUCK</div>
        <div class="block py-1.5">GOOSE</div>
      </div>

      <div className="flex flex-row flex-grow justify-evenly">
        <div className="text-sm md:text-2xl">INTRO</div>
        <div className="text-sm md:text-2xl">ROADMAP</div>
      </div>

      <div className="flex justify-evenly flex-row w-1/4">
        <div>
          <Link href="https://www.opensea.io/">
            <a>
              <img src="/assets/Opensea.svg" className="w-8 md:w-12"/>
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://www.twitter.com/">
            <a>
              <img src="/assets/Twitter.svg" className="w-8 md:w-12"/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}