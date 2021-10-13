export default function FAQ(props) {
    return (
        <div className="pt-8 md:pt-28 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="pt-8 md:pt-10 text-xl md:text-5xl">FAQs</div>
                <p className="font-roboto text-left text-xs md:text-xl pt-4 md:pt-20 w-5/6 lg:w-1/3">
                    <span className="font-robotoBold">What is the total supply?<br /></span>
                    A total of <span className="font-robotoBold text-danger">10000</span> unique Duck Duck Goose NFTs will be created.<br />
                </p>

                <p className="font-roboto text-left text-xs md:text-xl pt-4 md:pt-10 w-5/6 lg:w-1/3">
                    <span className="font-robotoBold">How many attributes are there?<br /></span>
                    There are a total of <span className="font-robotoBold text-danger">7 types of attributes </span>
                    and a total of <span className="font-robotoBold text-danger">135 attributes</span>.
                    There will always be a unique Duck Duck Goose for you.<br />
                </p>

                <p className="font-roboto text-left text-xs md:text-xl pt-4 md:pt-10 w-5/6 lg:w-1/3">
                    <span className="font-robotoBold">When is the launch?<br /></span>
                    We will launch on <span className="font-robotoBold text-danger">November 1, 7PM EST</span>.<br />
                </p>

                <p className="font-roboto text-left text-xs md:text-xl pt-4 md:pt-10 w-5/6 lg:w-1/3">
                    <span className="font-robotoBold">How much does one Duck Duck Goose cost?<br /></span>
                    DuckDuckGoose will be initially priced at <span className="font-robotoBold text-danger">0.01 Eth + Gas fees</span>.<br />
                </p>

                <p className="font-roboto text-left text-xs md:text-xl pt-4 md:pt-10 w-5/6 lg:w-1/3">
                    <span className="font-robotoBold">Do we have any other official socials?<br /></span>
                    No, Twitter <a className="font-robotoBold text-danger" href={props.twitter}>@DDGNFT </a> is the only official social contact.<br /> 
                    Any other social network accounts are unofficial, and there's no discord. <br />
                </p>

                <p className="font-robotoBold text-left text-xs md:text-xl pt-4 md:pt-10 w-5/6 lg:w-1/3">
                    Have more questions? <a className="text-danger" href={props.twitter}>@DDGNFT </a>
                    to find out more.
                </p>
            </div>
        </div>
    )
}
