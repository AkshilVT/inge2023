import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Prizes from '../components/Prizes'
import Sponsors from '../components/Sponsors'
import Timeline from '../components/Timeline'
import Tracks from '../components/Tracks'

const Home: NextPage = () => {
    return (
        <div className="relative">
            <Head>
                <title>Ingenious Hackathon 4.0</title>
                <meta
                    name="description"
                    content="The Ingenious Hackathon 4.0 is a 36-hour intensive coding competition organized by Tech Ingenium - The Annual Technical Fest of Ahmedabad University."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Ingenious Hackathon 4.0" />
                <meta
                    property="og:site_name"
                    content="Ingenious Hackathon 4.0"
                />
                <meta
                    property="og:url"
                    content="https://ingenious-hackathon.tk/"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/qRQ68Kr.png"
                />
            </Head>
            <div className="fixed hidden lg:block top-0 font-aurebesh opacity-[.15] text-9xl text-white marquee">
                IngeniousHackathon
            </div>
            <main className="text-white h-full w-screen flex flex-col items-center justify-center relative">
                <div className="container">
                    <Hero />
                </div>
                <div className="container">
                    <Prizes />
                </div>
                <div className="container">
                    <AboutUs />
                </div>
                <div className="container ">
                    <Tracks />
                </div>
                {/* <div className="container ">
                    <Timeline />
                </div> */}
                <div className="container">
                    <Sponsors />
                </div>
                <div className="container">
                    <FAQ />
                </div>
                <div className="container">
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Home
