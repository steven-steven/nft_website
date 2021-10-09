export default function Roadmap() {
    return (
        <div id="roadmap" className="pt-8 md:pt-28 font-forward font-normal">
            <div className="flex flex-col place-items-center">
                <div className="pt-8 md:pt-10 text-xl md:text-5xl">ROADMAP</div>
            </div>

            <div className="grid grid-cols-4 pt-8 md:pt-10">
                <div className="flex flex-col text-center">
                    <span className="text-xs md:text-2xl">BEGINNING</span>
                    <span className="font-roboto text-xs md:text-xl">Roadmap beginning</span>
                </div>
                <div></div>
                <div className="flex flex-col text-center">
                    <span className="text-xs md:text-2xl">50%</span>
                    <span className="font-roboto text-xs md:text-xl">Roadmap 50%</span>
                </div>
                <div></div>
            </div>

            <img src="/assets/Roadmap.svg" className="p-8 md:p-20" />

            <div className="grid grid-cols-4">
                <div></div>
                <div className="flex flex-col text-center">
                    <span className="text-xs md:text-2xl">25%</span>
                    <span className="font-roboto text-xs md:text-xl">Roadmap 25%</span>
                </div>
                <div></div>
                <div className="flex flex-col text-center">
                    <span className="text-xs md:text-2xl">100%</span>
                    <span className="font-roboto text-xs md:text-xl">Roadmap 100%</span>
                </div>
            </div>

        </div>
    )
}
