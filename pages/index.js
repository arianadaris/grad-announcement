import Image from 'next/image';
import { Icon } from '@iconify/react';
import PhotoCarousel from '../components/PhotoCarousel';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
  })

  const openMaps = () => {
    if (typeof window !== undefined && (navigator.platform.indexOf('iPhone') != -1 || navigator.platform.indexOf('iPod') != -1 || navigator.platform.indexOf('iPad') != -1))
      window.open('maps://www.google.com/maps/place/500+E+Veterans+Way,+Tempe,+AZ+85287/@33.4254655,-111.9346061,17z/data=!3m1!4b1!4m5!3m4!1s0x872b08df1a0a8407:0xb1d3165cdf5a7bd!8m2!3d33.425461!4d-111.9324174');
    else
      window.open('https://maps.apple.com/?address=500%20E%20Veterans%20Way,%20Tempe,%20AZ%2085281,%20United%20States&auid=12830467876346408132&ll=33.426463,-111.932487&lsp=9902&q=Sun%20Devil%20Stadium&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAVCgQIChAACgQIUhAGCgQIVRAMCgQIWRAGCgUIpAEQARIkKdQ/LatVtkBAMZq9Iq7S+1vAObS235D8tkBAQRiQYiWL+1vA&t=m');
  }

  // Doing it this way to avoid hydration error
  const openPersonalWebsite = () => {
    typeof window !== undefined ? window.open('https://www.arianadaris.dev/') : null;
  }



  return (
    <div>
      <div className="loaderWrapper">
        <div className="loader">
          <div className="gradWrapper">
            <div className="capTop" />
            <div className="capBottom" />
            <div className="capBodyTop" />
            <div className="capShadow" />
            <div className="tasselLeft" />
            <div className="tasselRight" />
          </div>
          <h3 className="mt-14">Get ready to celebrate...</h3>
        </div>
      </div>
      <main className="bg-[#F5F3F0]">
        {/* Home Section */}
        <div className="lg:flex lg:flex-row xs:flex-col md:h-screen xs:h-full">
          <div className="lg:w-[45%] xs:w-full lg:h-[100vh] xs:h-[40vh]">
            <PhotoCarousel className="h-full" />
          </div>
          <div className="lg:w-[55%] xs:w-full bg-[#F5F3F0] flex flex-col md:justify-center items-center px-[10vw] h-full xs:pb-4 md:pb-0 lg:pt-0 md:pt-12 xs:pt-6">
            <Image className="asuLogo" src={require('../public/images/ASU_Logo.png')} />
            <h2>Class of 2022</h2>
            <h1>Ariana Rajewski</h1>
            <div className="border-b-[1px] border-black w-[200px] lg:mb-8 lg:mt-6 xs:mt-2 xs:mb-4" />
            <h2 className="text-center">Arizona State University</h2>
            <h3 className="md:my-6 xs:my-4 lg:mx-10 xs:mx-4 text-center">Please join us in celebration for the Fulton Schools Convocation ceremony at Sun Devil Stadium.</h3>
            <h4>December 15, 2:30pm</h4>
            <a onClick={() => openMaps()} target="_blank" rel="noreferrer" className="hover:cursor-pointer hover:text-black">
              <h4 className="text-center ">500 E. Veterans Way</h4>
              <h4 className="text-center ">Tempe, AZ 85281</h4>
            </a>
            <div className='absolute bottom-[10vh] flex-col lg:visible xs:hidden '>
                <h3 className="text-center">With Love,</h3>
                <h6>The Rajewski Family</h6>
            </div>
            <a href="#thankyou"><Icon icon="ph:arrow-down" className="absolute sm:bottom-10 xs:invisible sm:visible animate-upDown" /></a>
          </div>
        </div>

        {/* Thank You Section */}
        <a id="thankyou"><div className="h-screen bg-[#F1EFEB] flex relative">
          <div className="lg:w-[60%] xs:w-full lg:px-20 xs:px-10 lg:py-[20vh] md:py-[10vh] xs:py-10">
            <div className="lg:flex lg:flex-row xs:flex-col items-center">
              <h1 className="md:w-[70%] xs:text-center lg:text-left">THANK YOU</h1>
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
                <h5 className="lg:mt-0 xs:mt-6 xs:text-center lg:text-left md:w-[50%] xs:w-full"><span className="font-ogg">-</span> Ariana Rajewski</h5>
              </div>
              <h4 className="absolute bottom-10 hover:text-[rgba(0,0,0,0.75)] hover:cursor-pointer" onClick={() => openPersonalWebsite()}>arianadaris.dev</h4>
            </div>
            
          </div>
          <div className="lg:w-[40%] xs:w-0 md:mt-[-2vh]">
            <Image src={require('../public/images/Ari_2.jpg')} className="personalImage" />
          </div>
        </div></a>
      </main>
    </div>
  )
}
