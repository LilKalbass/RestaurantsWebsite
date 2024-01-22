// import {StyleGuide} from "@/components/StyleGuide";
import {Hero} from "@/components/Hero";
import Header from "../components/Header";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";

import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
return (
    <main className = 'w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
        <Header/>
        {/*<StyleGuide/>*/}
        <Hero/>
        <Menu/>
        <Reservation/>
        <About/>
        <Map/>
        <Footer/>
    </main>
)}