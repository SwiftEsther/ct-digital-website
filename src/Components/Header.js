import React, {useState} from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../assets/BreadCrumb";
import Logo from "../assets/Logo"
import {ReactComponent as AngleArrowDown} from '../assets/AngleArrowDown.svg';
import Popup from 'reactjs-popup';
import { customModalStyles } from "../utils/customStyles";

const Header = () => {
  const [showMenuTray, setShowMenuTray] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-40">

      <div className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5">
        <div className="flex justify-between items-center py-4 md:w-9/10 lg:w-8/10 mx-auto">
          <div className="hidden md:flex justify-start md:w-3/10 lg:w-1/2">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex md:hidden justify-start items-center">
            <div className="mr-5">
              <BreadCrumb />
            </div>            
            <a href="#">
              <Logo width={116} height={24.86}/>
            </a>
          </div>
          <div className="hidden md:flex justify-between md:w-7/10 lg:w-1/2 items-center">
            <div>
              <nav className="flex space-x-8 text-grayish-blue mx-4">
                <Popup trigger={
                  <div to="#" className="text-base font-medium hover:text-gray-900 flex items-center cursor-pointer"> <p className="mr-3">About Us</p> <AngleArrowDown /> </div>
                } modal overlayStyle={{background: 'none'}} contentStyle={customModalStyles.content}>
                  <div>
                    <Link to={"/about-us/1"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Overview</p>
                      <p className="text-neutral text-sm">Our Mission, Vision and Values</p>
                    </Link>
                    <Link to={"/about-us/2"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Our Team</p>
                      <p className="text-neutral text-sm">Meet the winning team</p>
                    </Link>
                  </div>
                </Popup>
                <Popup trigger={
                  <div className="text-base font-medium hover:text-gray-900 flex items-center cursor-pointer"> <p className="mr-3">What we do</p> <AngleArrowDown /> </div>
                } modal overlayStyle={{background: 'none'}} contentStyle={customModalStyles.content}>
                  <div>
                    <Link to={"/brand-design"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Brand and Mulitmedia </p>
                      <p className="text-neutral text-sm">Brand Design Services</p>
                    </Link>
                    <Link to={"/product-design"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Product Design</p>
                      <p className="text-neutral text-sm">UI/UX Design and Research Services</p>
                    </Link>
                    <Link to={"/product-development"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Product Development </p>
                      <p className="text-neutral text-sm">Frontend and Backend Development</p>
                    </Link>
                    <Link to={"/social-media-management"} className="border-none mb-6 block focus-visible:border-none">
                      <p className="text-grayish-blue font-bold">Social Media Managment </p>
                      <p className="text-neutral text-sm">Social media managment Service</p>
                    </Link>
                  </div>
                </Popup>

                
                <Link to="#" className="text-base font-medium hover:text-gray-900 font-normal"> Projects </Link>
              </nav>
            </div>
            <div>
              <button className="rounded-md bg-newport-blue text-white px-5 py-4">Book a Consultation</button>
            </div>
          </div>
        </div>
      </div>   

      <div className="hidden absolute top-0 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Logo width={116} height={24.86}/>
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Analytics </span>
                </a>
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Engagement </span>
                </a>
    
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Security </span>
                </a>
    
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Integrations </span>
                </a>
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Automations </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>
    
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
    
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>
    
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>
    
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>
    
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
            </div>
            <div>
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500"> Sign in </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
} 

export default Header