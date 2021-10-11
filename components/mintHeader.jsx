import Image from 'next/image'
import Link from 'next/link'
import Constant from './constants';

export default ({
  connectToWallet,
  active,
  account,
  errorMsg 
}) => {

  return (
    <div className="p-10 flex flex-row font-forward font-normal text-sm md:text-xl items-center justify-between">
      <Link href="/">
        <a className="cursor-pointer hover:text-gray-700 hover:underline">
          <img src="/assets/chevronRight.svg" className="w-14 inline" />
          Back
        </a>
      </Link>
      <div className="p-3">
        { active ? 
          (
            <>
              Account: <a target="_blank" href={`${Constant.ETHERSCAN}address/${account}`} className="cursor-pointer hover:text-gray-700 hover:underline">{account}</a>
            </>
          ) : (
            <>
              <button onClick={connectToWallet}>ConnectToWallet</button>
              <br/>
              {!!errorMsg && <p className="mt-3 text-base font-sans text-red-800">Error: {errorMsg}</p> }
            </>
          )
        }
      </div>
    </div>
  )
}
