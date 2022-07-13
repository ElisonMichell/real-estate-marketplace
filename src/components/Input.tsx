import { MagnifyingGlass } from "phosphor-react";

interface inputProps {
   
}

export function Input(prop : inputProps) {
   return(
        <div className="flex flex-1 max-w-5xl text-base-100 bg-base-400 rounded-xl border border-base-300 px-4 py-2 gap-4 text-sm hover:border-base-200">
            <MagnifyingGlass size={28} />
            <input className="bg-base-400 placeholder:text-base-200 flex-1 outline-none" type="search" placeholder="Search here..." />
        </div>
   )
}