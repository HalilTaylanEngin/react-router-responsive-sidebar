

import { AiOutlineInfoCircle ,AiFillInteraction } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';


export const navbarNavList = [
    {
        icon:<GoHome/> ,
        title : "Home",
        to: "/"
    },
    {
        icon: <AiOutlineInfoCircle/>,
        title : "About",
        to: "/about"
    },
    {
        icon: <AiFillInteraction />,
        title : "Contact",
        to: "/contact"
    },
]