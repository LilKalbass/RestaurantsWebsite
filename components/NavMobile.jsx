'use client'
import React, {useState} from "react";

import {RiMenu2Line, RiHomeFill} from "react-icons/ri";
import {IoCloseOutline, IoCloudOffline} from "react-icons/io5";
import {BiSolidFoodMenu} from "react-icons/bi";
import {FaUsers, FaEnvelope} from "react-icons/fa";

import {Link as ScrollLink} from "react-scroll"
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const links = [
    {
      icon: <RiHomeFill/>,
      path: 'home',
      name: 'home',
      offset: 0
    },
    {
        icon: <BiSolidFoodMenu/>,
        path: 'menu',
        name: 'menu',
        offset: 0
    },
    {
        icon: <FaUsers/>,
        path: 'about',
        name: 'about',
        offset: -50
    },
    {
        icon: <RiHomeFill/>,
        path: 'contact',
        name: 'contact',
        offset: 0
    }
]

const NavMobile = ({containerStyles, iconStyles, linkStyles}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className = {`${containerStyles}`}>
            <div
                className = 'cursor-pointer outline-none'
                onClick = {()  => setIsOpen(!isOpen)}
            >
                <RiMenu2Line className = 'text-3xl text-white transition-all duration-200'/>
            </div>
            <aside className = {`${isOpen ? 'right-0' : '-right-full'} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
            >
                <div className = 'flex flex-col items-center justify-between h-full'>
                    <div
                        className = 'cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center'
                        onClick = {() => setIsOpen(false)}
                    >
                        <IoCloseOutline/>
                    </div>
                    <Link href = '/'>
                        <Image src = 'assets/logo.svg' alt ='logo_img' width = {90} height = {36}/>
                    </Link>
                    <div className ='flex flex-col gap-y-8'>
                        {links.map((link, index) => {
                            return (
                                <>
                                    <ScrollLink key = {index} to = {link.path} offset = {link.offset} smooth = {false} className = 'flex items-center gap-x-3'>
                                        <div className = {`${iconStyles}`}>{link.icon}</div>
                                        <div className = {`${linkStyles}`}>{link.name}</div>
                                    </ScrollLink>
                                </>
                            )
                        })}
                    </div>
                    <ScrollLink to = 'resetvation' smooth  offset = {-150}>
                        <Button variant = 'orange'>Book a table</Button>
                    </ScrollLink>
                </div>
            </aside>
        </div>
    )
}
export default NavMobile