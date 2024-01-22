'use client'

import Image from 'next/image'
import Link from 'next/link'

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";

const Footer = () => {
    return (
        <motion.footer
            variants = {fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0}}
            className = 'bg-footer bg-cover bg-no-repeat text-white pt-16'
        >
            <div className = 'container mx-auto'>
                <div className = 'flex flex-col justify-between xl:flex-row'>
                    <div className = 'w-[300px] mb-8 xl:mb-0'>
                        <Link href = '/'>
                            <Image src = '/assets/logo.svg' alt = 'logo_img' width = {90} height = {36}/>
                        </Link>
                    </div>
                    <div className = 'flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
                        <div>
                            <h4 className = 'font-semibold mb-5'>Blog</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        How to cook any%
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        How to eat in few secs
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        How to survive the dinner
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        How to eat with fork
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className = 'font-semibold mb-5'>Anything other than Blog</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        Top Italian restaurants NewYork
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Most Popular
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                       IDK
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Whatever
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className = 'font-semibold mb-5'>Socials</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        TripAdvisor
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Twitter(ak dead)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = 'border-t py-4 border-white/10'>
                    <p className = 'text-white/60 text-center text-sm'>Copyright &copy; W'Food 2024</p>
                </div>
            </div>
        </motion.footer>
    )
}
export default Footer