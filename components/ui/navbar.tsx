import Image from "next/image"
// import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import Link from "next/link"

export const NavigationBar = () => {
    return (
        <div className="pb-16 border justify-between">
            <div className="text-md float-left p-4 pt-5">
                <Link href="/" className="pl-2 font-bold hover:underline inline-flex">Timothy</Link>
                <Link href="/blog" className="pl-5 font-bold  hover:underline inline-flex">Blog</Link>
                <Link href="https://www.resume.lol/share/g703rle" className="pl-5 font-bold hover:underline inline-flex">Resume</Link>
            </div>
            <div className="text-sm float-right p-4">
                <Link href="mailto: tleprojectcs@gmail.com" className="pr-5 inline-flex">
                    <Image src="./email.svg" alt="email icon" width={30} height={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/timothy-le-cs/" className="pr-5 inline-flex">
                    <Image src="./linkedin.svg" alt="linkedin icon" width={30} height={30} />
                </Link>
                <Link href="https://github.com/Dominier" className="pr-2 inline-flex">
                    <Image src="./github.svg" alt="github icon" width={30} height={30} />
                </Link>
            </div>          
        </div>
    )
}