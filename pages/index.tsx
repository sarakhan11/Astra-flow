import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);

    return (
      <>

    <div className='overflow-x-hidden '>
        <div className='container '>
      <div className=" justify-center mx-auto ">
        <div className="">
          <div className="flex items-center">
            <button
          className=" block xl:hidden text-gray pt-10 px-6"
          onClick={() => setShowMenu(!showMenu)}
        >
           <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
        </button>

       
        <div className="flex flex-row hidden xl:block lg:hidden md:hidden sm:hidden mt-6 ml-48 mr-auto justify-between w-full">
          <div className='flex justify-between gap-x-12 w-full'>
            <img src="/image 2 (3).png" width={167} height={32} />
            <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
              Our Work
            </h1>
            <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
              Pricing
            </h1> 
            <div className=" flex gap-2">
              <h1 className=" text-base text-gray-800 font-normal mt-3 cursor-pointer">
                Resources
              </h1>
              <img className="cursor-pointer my-auto " src="/Vector (33).svg" width="12" height="5.44"  />
            </div>
            <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
              Contact Us
            </h1>
          <div className="ml-auto">
            <button className="border px-12 py-3 rounded-full bg-gray-50 hover:bg-indigo-50 focus:bg-indigo-50 ease-in-out duration-300 border-gray-800 font-semibold">
              Request a Logo
            </button>
          </div>
          </div>
        </div>

            <nav
        className={showMenu
            ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
            : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
               <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            
            <div className="flex flex-col block xl:hidden lg:block md:block sm:block bg-white gap-x-12 mt-6 px-12">
        <img src="/image 2 (3).png" width={167} height={32} />
        <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
          Our Work
        </h1>
        <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
          Pricing
        </h1> 
        <div className=" flex gap-2">
          <h1 className=" text-base text-gray-800 font-normal mt-3 cursor-pointer">
            Resources
          </h1>
          <img className="cursor-pointer my-auto " src="/Vector (33).svg" width="12" height="5.44"  />
        </div>
        <h1 className="text-base text-gray-800 font-normal mt-3 cursor-pointer">
          Contact Us
        </h1>
        <div className="ml-auto">
          <button className="border px-12 py-3 rounded-full bg-gray-50 hover:bg-indigo-50 focus:bg-indigo-50 ease-in-out duration-300 border-gray-800 font-semibold">
            Request a Logo
          </button>
        </div>
      </div>
          </nav>
        </div>
      </div>
    </div>
</div>
</div>





    <div className="container mx-auto lg:px-3 xl:px-4 2xl:px-20 px-5 mt-48 xl:mt-0 lg:mt-48 md:mt-48 sm:mt-48 ">
      
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col mt-16 px-1 xl:px-12 lg:px-12 md:px-4 sm:px-1">
        <div className="w-11/12 ">
          <h1 className="text-3xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl font-semibold w-11/12">
            We make your <span className="text-blue-500">LOGO</span> and <span className="text-cyan-400">BRAND</span> stand out from the crowd.
          </h1>
          <h1 className="text-gray-800 text-base mt-8 w-full xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full">
            We create compelling brands for startups, companies and organizations. With German quality. 
          </h1>
          <button className="border mb-4 px-12 py-3 mt-8 rounded-full bg-gray-50 hover:bg-indigo-50 focus:bg-indigo-50 ease-in-out duration-300 border-gray-800 font-semibold">
            Request a Logo
          </button>
        </div>
        <div className="w-full xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full">
          <div className="float-right">
            <img src="/_next/image?url=%2FGroup%2099.png&amp;w=1080&amp;q=75" width="445" height="491" decoding="async" data-nimg="1" className=" my-auto " />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 mt-16 mx-auto px-1 xl:px-12 lg:px-12 md:px-4 sm:px-2 pb-12">
        <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-gray-400 font-semibold pt-12">
          Benefits
        </h1>
        <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold text-gray-800">
          We see a problem &amp; we fix it.
        </h1>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-12">
          <div className="bg-white w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full rounded-xl px-8 py-12 ">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold text-gray-800 px-5">
              <span className="line-through text2 text-4xl font-semibold">
                Just a logo</span>A stunning identity.
            </h1>
            <h1 className="text-gray-800 text-base mt-6 w-full xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-full font-normal px-1 xl:px-5 lg:px-5 md:px-5 sm:px-1">
              We design beautiful brands that speak to the hearts and minds of your consumers. A good brand isn’t only beautiful, it tells a clear story and speaks to the unique value of your product to set your brand apart from the noise.
            </h1>
          </div>
          <div className="w-full xl:w-44 lg:w-44 md:w-44 sm:w-full ">
            <div className="flex flex-col">
              <div className="bg-white py-5 rounded-xl">
                <h1 className="font-extrabold text-violet-500 text-3xl text-center text5">
                  25+
                </h1>
                <h1 className="text-center text-gray-800 mt-1 text-base">
                  Happy Clients
                </h1>
              </div>
              <div className="bg-white py-5 rounded-xl mt-6">
                <h1 className="font-extrabold text-3xl text-cyan-500 text-center text6">
                  100%
                </h1>
                <h1 className="text-center text-gray-800 mt-1 text-base">
                  Passion
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-y-8 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-x-8 mt-8">
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
            <div className="flex justify-center items-center ">
              <img className="bg-[#1A1832] p-2 rounded-2xl" src="/light-bolt 1.svg" width="92" height="92" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold text-center mt-5 text-gray-800 w-full xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full">
                Lightning-fast delivery
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                Get your logo design package back within two weeks of purchase. Word.
              </h1>
            </div>
          </div>
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
            <div className="flex justify-center items-center">
              <img className="bg-[#1A1832] p-2 rounded-2xl" src="/refresh-option 1.svg" width="92" height="92" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl  font-semibold text-center mt-5 text-gray-800 w-5/12">
                Multiple revisions
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl mt-5 text-center text-gray-800 w-7/12 ">
                We’re not happy until you’re 100% satisfied.
              </h1>
            </div>
          </div>
        </div>
        <div className="gap-y-8 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8">
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
            <div className="flex justify-center items-center">
              <img className="bg-[#1A1832] p-2 rounded-2xl" src="/Refresh-option 1.svg" width="92" height="92" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl  font-semibold text-center mt-5 text-gray-800 w-6/12">
                Smooth Collaboration
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                Easily track the process using Slack or Discord.
              </h1>
            </div>
          </div>
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
            <div className="flex justify-center items-center">
              <img className="bg-[#1A1832] p-2 rounded-2xl" src="/light-bolt 1.svg" width="92" height="92" />   
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl  font-semibold text-center mt-5 text-gray-800 w-6/12">
                Customer-first principle
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
                We make sure your branding will appeal to the right kind of people!
              </h1>
            </div>
          </div>
        </div>
        <div className="gap-y-8 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8">
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
            <div className="flex justify-center items-center">
              <img className="bg-[#1A1832] p-2 rounded-2xl" src="/Refresh-option 1.svg" width="92" height="92" />
            </div>
          <div className="flex justify-center items-center">
            <h1 className="text-text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold text-center mt-5 text-gray-800 w-4/12">
              Goal Oriented
            </h1>
          </div>
          <div className="flex  justify-center items-center">
            <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
              We go beyond to exceed all your expectations.
            </h1>
          </div>
        </div>
        <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white rounded-2xl py-12 px-3">
          <div className="flex  justify-center items-center">
            <img className="bg-[#1A1832] p-2 rounded-2xl" src="/Refresh-option 1.svg" width="92" height="92" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl  font-semibold text-center mt-5 text-gray-800 w-5/12">
              Non-Profit Love
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl mt-5 text-center text-gray-800 w-9/12 ">
              Registrered non-profits receive 50% off on all packages.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8">
        <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 sm:w-full bg-[#0F1528] py-24 rounded-2xl ">
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-white font-semibold text-center">
            Pixel-perfect
          </h1>
          <div className="flex justify-center items-center">
            <h1 className="text-xl text-center font-normal text-white w-10/12 mt-8 ">
              Your SVG and EPS logo files let you scale your logo to any size
            </h1>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <img className="" src="/Group 41.png" width="505" height="116" />
          </div>
        </div>
        <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-slate-200 rounded-2xl py-8">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold mx-auto gap-y-8 mt-12 w-full px-8">
              Full brand guideline
            </h1>
            <div className="flex justify-end items-end px-2 xl:px-8 lg:px-8 md:px-4 sm:px-1">
              <img src="/Group 5 (4).png" width="454.46" height="239.96" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-2 xl:px-12 lg:px-12 md:px-12 sm:px-2 py-12">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-x-8 gap-y-4">
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full">
            <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-gray-800 font-semibold w-5/12">
              Our Creative Proccess
            </h1>
            <h1 className="text-base text-gray-800 mt-8 w-full xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-full ">
              We design beautiful brands that speak to the hearts and minds of your consumers. A good brand isn’t only beautiful, it tells a clear story and speaks to the unique value of your product to set your brand apart from the noise.
            </h1>
          </div>
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full">
            <div className="bg-white rounded-3xl px-8 py-12 shadow border radius">
              <img src="/Group 6 (1).svg" width="32" height="27" />
              <h1 className="mt-1 text-gray-800 font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl">
                Discovery
              </h1>
              <h1 className="mt-2 text-gray-800 text-base pb-5">
                Going deep into your business to understand its core sense, goals and challenges to build partnership.
              </h1>
            </div>
            <div className="bg-white rounded-3xl px-8 py-12 shadow-xl border radius -mt-10">
              <img src="/Group 6 (1).svg" width="32" height="27" />
              <h1 className="mt-1 text-gray-800 font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl">
                Research
              </h1>
              <h1 className=" mt-2 text-gray-800 text-base pb-6">
                Conduct research focused on your industry, its history, and competitors.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12">
        <div className="flex justify-center items-center">
          <h1 className="text-gray-800 font-semibold text-center text-2xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl lg:w-5/12 xl:w-4/12 2xl:w-4/12 w-full md:w-4/12 sm:w-full">
            Choose the right package that works for your business
          </h1>
        </div>
        <div className="flex justify-center items-center mt-2">
          <h1 className="text-center text-gray-800 font-normal">
            We offer 3 different type of packages.
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 px-2 xl:px-12 lg:px-12 md:px-4 sm:px-2 mt-12">
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2 py-12 rounded-2xl">
            <h1 className="font-semibold text-2xl text-gray-800">
              Bronze
            </h1>
            <h1 className="font-semibold text-4xl text-gray-800 mt-3">
              $495
            </h1>
            <div className="mt-6 -mb-1.5">
              <img src="/Group 12.svg" width="10" height="9.02" />
            </div>
            <h1 className="text-gray-800 lg:w-full xl:w-full 2xl:w-10/12 w-full ">
              Best suited for small businesses, start-ups and entrepreneurs who need an identity.
            </h1>
            <button className="w-full py-5 bg-gray-800 text-white mt-5 rounded-2xl text-lg font-semibold">
              Get Started
            </button>
            <h1 className="text-gray-800 font-semibold text-base mt-8">
              What Included
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Client Brainstorm
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              2 rounds of Revisions
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              1 Initial Logo Sketch Design
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Files Provided: JPEG, PNG, SVG, etc.
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Full brand guidelines + Mockups
            </h1>
            <h1 className="text-gray-800 font-semibold text-base mt-6 px-6">
              1-2 Weeks Delivery
            </h1>
          </div>
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-[#0F1528] px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2  py-12 rounded-2xl">
            <h1 className="font-semibold text-2xl text-white">
              Silver
            </h1>
            <h1 className="font-semibold text-4xl text-white mt-3">
              $895
            </h1>
            <div className="mt-6 -mb-1.5">
              <img src="/Group 12 (1).svg" width="10" height="9.02" />
            </div>
            <h1 className="text-white lg:w-full xl:w-full 2xl:w-10/12 w-full">
              Medium sized businesses who require a quality custom brand that will take them to the next level.
            </h1>
            <button className="w-full text-black py-5 bg-pink-200 text-gray-800 mt-5 rounded-2xl text-lg font-semibold">
              Get Started
            </button>
            <h1 className="text-white font-semibold text-base mt-8">
              What Included
            </h1>
            <h1 className="text-white font-normal text-base mt-2">
              Client Brainstorm
            </h1>
            <h1 className="text-white font-normal text-base mt-2">
              2 rounds of Revisions
            </h1>
            <h1 className="text-white font-normal text-base mt-2">
              1 Initial Logo Sketch Design
            </h1>
            <h1 className="text-white font-normal text-base mt-2">
              Files Provided: JPEG, PNG, SVG, etc.
            </h1>
            <h1 className="text-white font-normal text-base mt-2">
              Full brand guidelines + Mockups
            </h1>
            <h1 className="text-white font-semibold text-base mt-6 px-6">
              1-2 Weeks Delivery
            </h1>
          </div>
          <div className="w-full xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2  py-12 rounded-2xl">
            <h1 className="font-semibold text-2xl text-gray-800">
              Gold
            </h1>
            <h1 className="font-semibold text-4xl text-gray-800 mt-3">
              $1295
            </h1>
            <div className="mt-6 -mb-1.5">
              <img className="" src="/Group 12.svg" width="10" height="9.02" />
            </div>
            <h1 className="text-gray-800 lg:w-full xl:w-full 2xl:w-10/12 w-full ">
              Large and Medium businesses looking for authenticity in their brand.
            </h1>
            <button className="w-full py-5 bg-gray-800 text-white mt-5 rounded-2xl text-lg font-semibold ease-in-out duration-500">
              Get Started
            </button>
            <h1 className="text-gray-800 font-semibold text-base mt-8">
              What Included
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Client Brainstorm
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              4 rounds of Revisions
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              3 Initial Logo Sketch Designsz
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Files Provided: JPEG, PNG, SVG, etc.
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Full brand guidelines + Mockups
            </h1>
            <h1 className="text-gray-800 font-normal text-base mt-2">
              Logo guideline
            </h1>
            <h1 className="text-gray-800 font-semibold text-base mt-6 px-6">
              1-2 Weeks Delivery
            </h1>
          </div>
        </div>
        <h1 className="text-gray-800 text-base text-center font-normal mt-3 mx-4 xl:mx-0 lg:mx-0 md:mx-1 sm:mx-4">
          Need something more custom? We got you! Contact us here
        </h1>
        <h1 className="text-4xl text-center font-semibold text-gray-800 mt-16 mx-4 xl:mx-0 lg:mx-0 md:mx-1 sm:mx-4">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8 px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2">
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              Why are your logo packages so expensive?
            </h1>
          </div>
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              What software do you use to create logos?
            </h1>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8 px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2">
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              How long does it takes to complete a logo?
            </h1>
          </div>
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              Where are you based?
            </h1>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 mt-8 px-2 xl:px-12 lg:px-12 md:px-2 sm:px-2">
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              Do you offer other services?
            </h1>
          </div>
          <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full bg-white px-8 py-8 rounded-2xl shadow">
            <h1 className="text-gray-800 text-base font-semibold">
              I have more questions, how do I contact you?
            </h1>
          </div>
        </div>
        <div className=" px-0 xl:px-44 lg:px-44 md:px-24 sm:px-0">
          <div className="bg-[#0B172A] mt-12 py-8 rounded-2xl px-8 ">
            <div className="flex justify-end items-end ">
              <img src="/Group 39.svg" width="47" height="47.61" />
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col mb-12">
              <div className="">
                <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-white font-semibold w-7/12">
                  Don’t just buy a logo, Invest in your brand.
                </h1>
                <h1 className="text-white text-base mt-3">
                  Let’s make something beautiful for you!
                </h1>
              </div>
              <div className="ml-auto">
                <button className="w-full py-6 px-20 w-[200px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-[200px] bg-pink-200 text-gray-800 mt-16 rounded-2xl text-lg font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between items-between px-12 mt-20">
          <div className="">
            <img src="/image 10.svg" width="181" height="44" decoding="async" />
          </div>
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-x-32 gap-y-4">
            <div className="">
              <h1 className="text-lg font-semibold">
                Useful Links
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                Work
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                Pricing
              </h1> 
              <h1 className="text-base font-semibold mt-4 text4">
                Resources
              </h1> 
              <h1 className="text-base font-semibold mt-4 text4">
                Sitemap
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                Contact
              </h1>
            </div>
            <div className="">
              <h1 className="text-lg font-semibold">
                Services
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                Logo &amp; Branding
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                Web Design (COMING SOON!)
              </h1>
              <h1 className="text-base font-semibold mt-4 text4">
                SEO (COMING SOON!)
              </h1> 
            </div>
            
          </div>
        </div>
        <div className="justify-between mt-5 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col px-16">
              <div className="">
                <h1 className="text-base text-gray-500 text4">
                  © Copyright
                </h1>
              </div>
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-x-8 text-gray-500 ">
                <h1 className="text-base">
                  Cookie Policy
                </h1>
                <h1 className="text-base text-gray-500 ">
                  Privacy Policy
                </h1>
              </div>
            </div>
      </div>
    </div>
    </>
    );
  };
  
  export default Index;