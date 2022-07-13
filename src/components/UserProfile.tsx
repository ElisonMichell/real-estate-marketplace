import { Bell, CaretDown } from "phosphor-react";

export function UserProfile() {
    return(
        <div className="flex items-center text-base-100 gap-3 px-3">
            <Bell className="text-base-200 hover:text-base-100 cursor-pointer" size={24} weight="bold" />
            <div className="group flex items-center gap-3 cursor-pointer">
                <img className="rounded-3xl w-12 h-12 border border-base-300" src="https://github.com/ElisonMichell.png"/>
                <span className="group-hover:text-base-200">Elison Michell</span>
                <CaretDown className="group-hover:text-base-200" size={16} weight="bold" />
            </div>
           
        </div>
    )
}