import Link from "next/link"
export default function Nav() {
    return(
        <div className="bg-[rgb(21,21,21)] h-screen">
            <div className="flex justify-between items-center h-20 rg-[rgb(21,21,21)]">
            <div className="text-white font-bold text-2xl ml-16 hover:text-[#2cdae3]">
        Portfolio
            </div>
        <div className="text-white font-bold text-xl mr-16">
        <Link href="/" className="pr-5 text-[#2cdae3]">Home</Link>
        <Link href="/About" className="pr-5 hover:text-[#2cdae3]">About</Link>
        <Link href="/Skills" className="pr-5 hover:text-[#2cdae3]">Skills</Link>
        </div>
        </div>

        </div>
    )
}