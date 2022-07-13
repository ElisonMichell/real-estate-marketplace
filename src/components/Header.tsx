import { Input } from "./Input";
import { Logo } from "./Logo";
import { UserProfile } from "./UserProfile";

interface HeaderProps {
   
}

export function Header(prop : HeaderProps) {
   return(
       <header className="w-full flex items-center justify-between gap-16 px-4 py-3 bg-base-500 border-b border-base-300">
            <div className="w-64">
                <Logo/>
            </div>
            <Input />
            <div className="w-64 flex justify-end">
                <UserProfile />
            </div>
       </header>
   )
}