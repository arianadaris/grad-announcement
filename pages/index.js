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
      </Head>

      <main className="">
        {/* Home Section */}
        <div className="flex h-screen">
          <div className="w-[45%] h-[100vh]">
            <PhotoCarousel className="h-full" />
          </div>
          <div className="w-[55%] bg-[#F5F3F0] flex flex-col justify-center items-center px-[10vw]">
            <Image className="asuLogo" src={require('../public/images/ASU_Logo.png')} />
            <h2>Class of 2022</h2>
            <h1>Ariana Rajewski</h1>
            <div className="border-b-[1px] border-black w-[200px] mb-8 mt-6" />
            <h2>Arizona State University</h2>
            <h3 className="my-6 mx-10 text-center">Please join us in celebration for the Fulton Schools Convocation ceremony at Sun Devil Stadium.</h3>
            <h4>December 15, 2:30pm</h4>
            <h4>500 E. Veterans Way</h4>
            <h4>Tempe, AZ 85281</h4>
            <a href="#thankyou"><Icon icon="ph:arrow-down" className="absolute bottom-10 animate-upDown" /></a>
          </div>
        </div>

        {/* Thank You Section */}
        <a id="thankyou"><div className="h-screen bg-[#F1EFEB] flex relative">
          <div className="w-[60%] px-20 py-[15vh]">
            <div className="flex items-center">
              <h1>THANK YOU</h1>
              <div className="border-b-[1px] border-black w-[50%] mb-8 mt-6 mx-auto" />
            </div>
            <div className="my-20">
              <h3 className="my-10">
                To everyone who has supported me throughout the completion of my degree, thank you. Your love and encouragement means the world.
              </h3>
              <h3 className="my-10">
                After being awarded a Bachelor's degree in Computer Science, I anticipate attending graduate school at Arizona State in the spring, pursing a Master's degree in Computer Science.
              </h3>
              <div className="flex justify-between items-center">
                <h3>Thank you all for being a part of my journey.</h3>
                <h5><span className="font-ogg">-</span> Ariana Rajewski</h5>
              </div>
            </div>
            <a href="https://www.arianadaris.dev/" target="_blank" rel="noreferrer"><h4 className="absolute bottom-5 hover:text-[rgba(0,0,0,0.75)]">arianadaris.dev</h4></a>
          </div>
          <div className="w-[40%]">
            <Image src={require('../public/images/Ari_2.jpg')} className="personalImage" />
          </div>
        </div></a>
      </main>
    </div>
  )
}
