import type { NextPage } from 'next'
import { NavConfig } from '../types/types'
import Link from 'next/link'

const NavOptions: NextPage = () => {
    const navOptions: NavConfig[] = [
        {
            index: 1,
            title: "Home",
            logo: "",
            link: "/",
        },
        {
            index: 2,
            title: "Menu",
            logo: "",
            link: "/menu",
        },
        {
            index: 3,
            title: "History",
            logo: "",
            link: "/history",
        },
        {
            index: 4,
            title: "Wallet",
            logo: "",
            link: "/wallet",
        },
        {
            index: 5,
            title: "Promos",
            logo: "",
            link: "/promo",
        },
        {
            index: 6,
            title: "Setting",
            logo: "",
            link: "/setting",
        }
    ]
    
    return (
        <div className='space-y-2'>   
            {
                navOptions.map(nav => 
                    <div key={nav.index} className="flex justify-center items-center rounded-lg text-md px-2 py-6 text-[#BBB8C4] hover:text-white hover:bg-[#A7775C]">
                        <Link href={nav.link}><button>{nav.title}</button></Link>
                    </div>
                )
            }
        </div>
    )
}

const SideBar: NextPage = () => {
    return (
        <div className='flex flex-col items-center h-full w-1/12 py-10'>
            <div className='w-full flex justify-center font-bold text-xl'>
                Logo
            </div>
            <div className='flex-1 flex justify-center w-full py-16'>
                <NavOptions/>
            </div>
            <div>
                <button className='rounded-lg text-[#BBB8C4] w-full px-2 py-6 hover:text-white hover:bg-[#A7775C]'>Logout</button>
            </div>
        </div>
    )
}

export default SideBar;