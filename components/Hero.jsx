'use client'

import Image from 'next/image'
import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import {Button} from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className = 'bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0' id = 'home'>
            <div className = 'container mx-auto'>
                <div className = 'flex items-center xl:h-[960px]'>
                    <div className = 'w-full xl:max-w-[460px] text-center xl:text-left'>
                        <motion.h1
                            className = 'text-white mb-7 py-7'
                            variants = {fadeIn('down', 0.2)}
                            initial = 'hidden'
                            whileInView = {'show'}
                            viewport = {{once: false, amount: 0.4}}
                        >
                            A taste of local <br/> flavours
                        </motion.h1>
                        <motion.p
                            className = 'text-white font-semibold mb-7'
                            variants = {fadeIn('down', 0.2)}
                            initial = 'hidden'
                            whileInView = {'show'}
                            viewport = {{once: false, amount: 0.4}}
                        >
                            by: <span className = 'text-orange'>Qwerty Xyerty</span>
                        </motion.p>
                        <motion.p
                            className = 'text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0'
                            variants = {fadeIn('down', 0.6)}
                            initial = 'hidden'
                            whileInView = {'show'}
                            viewport = {{once: false, amount: 0.4}}
                        >
                            Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam.
                            Tellus in fusce vel gravida lobortis diam dis ut. Bibendum senectus urna, in ultricies sed lorem natoque.
                            Risus pharetra
                        </motion.p>
                        <motion.div
                            variants = {fadeIn('down', 0.8)}
                            initial = 'hidden'
                            whileInView = {'show'}
                            viewport = {{once: false, amount: 0.4}}
                        >
                            <Button>Let`s eat</Button>
                        </motion.div>
                    </div>
                    <motion.div
                        className = 'hidden xl:flex xl:absolute xl:top-[200px] xl:right-0'
                        variants = {fadeIn('up', 0.8)}
                        initial = 'hidden'
                        whileInView = {'show'}
                        viewport = {{once: false, amount: 0.1}}
                    >
                        <Image src = '/assets/hero/plate.png' width = {756} height = {682} alt = 'plate_img'/>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className = 'hidden xl:flex xl:relative xl:-top-36'
                variants = {fadeIn('down', 1.2)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport = {{once: false, amount: 0.1}}
            >
                <Image src = '/assets/hero/coffee.png' width = {386} height = {400} alt = 'coffee_img'/>
            </motion.div>
        </section>
    )
}