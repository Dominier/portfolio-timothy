import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export const NavigationBar = () => {
    return (
        <div className="pb-32">
            <div className="text-sm float-right p-4">
                <a href="mailto: tleprojectcs@gmail.com" className="pr-5 hover:underline">Gmail</a>
                <a href="https://github.com/Dominier" className="pr-5 hover:underline">GitHub</a>
                <Avatar className="inline-flex">
                    <AvatarImage src="" width={10} height={20} />
                    <AvatarFallback className="text-black">TL</AvatarFallback>
                </Avatar>
            </div>          
        </div>
    )
}