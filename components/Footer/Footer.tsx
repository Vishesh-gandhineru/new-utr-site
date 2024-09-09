import Image from "next/image";
import React from "react";
import MobileAccordionMenu from "./MobileAccordionMenu";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Pinterest,
} from "../CustomIcons";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="-mb-[5%] w-full">
        <Image
          src="/footerLogo.svg"
          alt="Footer logo"
          width={100}
          height={100}
          sizes="100vw"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="w-full px-5 lg:px-12 h-full bg-light_green py-8 lg:py-20 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-12 lg:justify-items-center">
          <div className="lg:flex lg:h-full lg:flex-col lg:justify-between lg:col-span-2">
            <div className="relative h-[100px] w-[80%] lg:w-full">
              <Image
                src="/LogoWhite.svg"
                alt="Under the Roof Stays White logo"
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
            <div>
              <p className="font-normal text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                fringilla maximus augue, ac semper erat luctus in.
              </p>
            </div>
          </div>
          <div className="lg:hidden ">
            <div className="border-b border-t border-white">
              <MobileAccordionMenu />
            </div>
          </div>
          <div className="hidden lg:col-span-2 border-b border-white pb-5 lg:block lg:border-none">
            <h4 className="mb-3 font-Switzer text-sm font-bold tracking-[0.5px] text-green">
              TRENDING LOCATIONS
            </h4>
            <div className="grid list-none grid-cols-3 gap-10 font-Switzer text-base font-light text-white">
              <div className="space-y-1">
                <li>Goa</li>
                <li>Mumbai</li>
                <li>Alibaug</li>
                <li>Lonavla</li>
                <li>Karjat</li>
                <li>Wayanad</li>
              </div>
              <div className="space-y-1">
                <li>Goa</li>
                <li>Mumbai</li>
                <li>Alibaug</li>
                <li>Lonavla</li>
                <li>Karjat</li>
                <li>Wayanad</li>
              </div>
              <div className="space-y-1">
                <li>Goa</li>
                <li>Mumbai</li>
                <li>Alibaug</li>
                <li>Lonavla</li>
                <li>Karjat</li>
                <li>Wayanad</li>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-2 border-b border-white pb-5 lg:block lg:border-none">
            <h4 className="mb-3 font-Switzer text-sm font-bold tracking-[0.5px] text-green">
              COLLECTIONS
            </h4>
            <div className="grid list-none grid-cols-2 gap-12 font-Switzer text-base font-light text-white">
              <div className="space-y-1">
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
              </div>

              <div className="space-y-1">
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
                <li>Name of Collection</li>
              </div>
            </div>
          </div>
          <div className="border-b lg:col-span-1 border-white pb-5 lg:border-none">
            <h4 className="mb-3 font-Switzer text-sm font-bold tracking-[0.5px] text-green">
              INFO
            </h4>
            <div className="list-none space-y-1 text-base font-light text-white">
              <li>Compare Properties</li>
              <li>About Us</li>
              <li>List a Property</li>
              <li>Help Centre</li>
              <li>Log in/ Register</li>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-20 space-y-8 lg:flex items-center justify-between lg:space-y-0">
          <div className="flex items-center justify-center gap-5">
            <a href="instagram.com">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="linkedin.com">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="facebook.com">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="pinterest.com">
              <Pinterest className="h-5 w-5" />
            </a>
            <a href="twitter.com">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="www.youtube.com" target="_blank">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          {/* <div className="hidden lg:block w-[800px] bg-white h-[1px]" /> */}
          <div className="flex items-center justify-between text-white lg:gap-12">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
