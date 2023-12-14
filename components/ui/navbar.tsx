import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Link from "next/link"

export const NavigationBar = () => {
    return (
        <div className="pb-32">
            <div className="text-sm float-right p-4">
                <a href="mailto: tleprojectcs@gmail.com" className="pr-5 hover:underline">Gmail</a>
                <a href="https://github.com/Dominier" className="pr-3 hover:underline">GitHub</a>
                <Link href="" className=" hover:bg-gray-500 hover:opacity-80 rounded-3xl p-2 mr-3">
                    <Image src="/menutop.svg" alt="3x3 menu" width={17} height={15} className="inline-flex" />
                </Link>
                <Avatar className="inline-flex">
                    <AvatarImage src="" width={10} height={20} />
                    <AvatarFallback className="text-black">TL</AvatarFallback>
                </Avatar>
            </div>          
        </div>
    )
}