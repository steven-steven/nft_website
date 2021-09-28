import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-row pt-28 px-28 font-forward font-normal justify-between">
      <div className="text-4xl table-caption text-center">
        <div class="block py-1.5">DUCK</div>
        <div class="block py-1.5">DUCK</div>
        <div class="block py-1.5">GOOSE</div>
      </div>

      <div className="flex flex-row justify-end items-start">
        <div className="flex items-end">
          <div className="px-32 text-2xl">INTRO</div>
          <div className="pr-32 text-2xl">ROADMAP</div>
          <div className="pr-8">
            <Link href="https://www.opensea.io/">
              <a>
                <Image src="/assets/Opensea.svg" layout="fixed" width="45" height="45" />
              </a>
            </Link>
          </div>
          <div className="pr-4">
            <Link href="https://www.twitter.com/">
              <a>
                <Image src="/assets/Twitter.svg" layout="fixed" width="45" height="45" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
