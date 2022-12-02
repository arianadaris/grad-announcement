import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import PhotoCarousel from '../components/PhotoCarousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ariana Rajewski | ASU Graduation</title>
        <meta name="description" content="Ariana Rajewski ASU Graduation Announcement" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>

      <main className="">
        {/* Home Section */}
        <div className="lg:flex lg:flex-row xs:flex-col h-full">
          <div className="lg:w-[45%] xs:w-full lg:h-[100vh] xs:h-[35vh]">
            <PhotoCarousel className="h-full" />
          </div>
          <div className="lg:w-[55%] xs:w-full bg-[#F5F3F0] flex flex-col lg:justify-center items-center px-[10vw] lg:h-full xs:h-[55vh] lg:pt-0 md:pt-12 xs:pt-6">
            <Image className="asuLogo" src={require('../public/images/ASU_Logo.png')} />
            <h2>Class of 2022</h2>
            <h1>Ariana Rajewski</h1>
            <div className="border-b-[1px] border-black w-[200px] lg:mb-8 lg:mt-6 xs:mt-2 xs:mb-4" />
            <h2 className="text-center">Arizona State University</h2>
            <h3 className="md:my-6 xs:my-4 lg:mx-10 xs:mx-4 text-center">Please join us in celebration for the Fulton Schools Convocation ceremony at Sun Devil Stadium.</h3>
            <h4>December 15, 2:30pm</h4>
            <h4>500 E. Veterans Way</h4>
            <h4>Tempe, AZ 85281</h4>
            <div className='absolute bottom-[10vh] flex-col lg:visible xs:hidden'>
                <h3 className="text-center">With Love,</h3>
                <h6>The Rajewski Family</h6>
            </div>
            <a href="#thankyou"><Icon icon="ph:arrow-down" className="absolute bottom-10 animate-upDown" /></a>
          </div>
        </div>

        {/* Thank You Section */}
        <a id="thankyou"><div className="h-screen bg-[#F1EFEB] flex relative">
          <div className="lg:w-[60%] xs:w-full lg:px-20 xs:px-10 lg:py-[25vh] md:py-[10vh] xs:py-10">
            <div className="lg:flex lg:flex-row xs:flex-col items-center">
              <h1 className="lg:w-[50%] xs:text-center lg:text-left">THANK YOU</h1>
              <div className="border-b-[1px] border-black lg:w-[100%] xs:w-[50%] mb-8 mt-6 mx-auto" />
            </div>
            <div className="lg:my-20">
              <h3 className="my-10 xs:text-center lg:text-left">
                To everyone who has supported me throughout the completion of my degree, thank you. Your love and encouragement means the world.
              </h3>
              <h3 className="my-10 xs:text-center lg:text-left">
                After receiving a Bachelor's degree in Computer Science, I anticipate attending graduate school at Arizona State in the spring, pursing a Master's degree in Computer Science.
              </h3>
              <div className="flex xs:flex-col lg:flex-row lg:justify-between lg:items-center">
                <h3 className="xs:text-center lg:text-left">Thank you all for being a part of my journey.</h3>
                <h5 className="lg:mt-0 xs:mt-6 xs:text-center lg:text-left"><span className="font-ogg">-</span> Ariana Rajewski</h5>
              </div>
            </div>
            <a href="https://www.arianadaris.dev/" target="_blank" rel="noreferrer"><h4 className="absolute bottom-5 hover:text-[rgba(0,0,0,0.75)]">arianadaris.dev</h4></a>
          </div>
          <div className="lg:w-[40%] xs:w-0">
            <Image src={require('../public/images/Ari_2.jpg')} className="personalImage" />
          </div>
        </div></a>
      </main>
    </div>
  )
}
