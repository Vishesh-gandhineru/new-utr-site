import Calender from "@/components/ui/calender";
import HomeFilterBar from "@/components/Filter/HomeFilterBar";
import LoginForm from "@/components/LoginComponents/LoginForm";
import MainMenu from "@/components/Header/Header";
import Signupform from "@/components/LoginComponents/signupForm";
import { getProperties } from "@/serverAction/PropertiesAPI";
import PropertyGrid from "@/components/PropertyComponents/PropertyGrid";

export default async function Home() {
  const getProperty = await getProperties({ limit: 5 });
  return (
    <div>
      <section className="heroSlider relative h-[500px] overflow-hidden rounded-[20px] bg-HomeHeroBg bg-cover bg-center bg-no-repeat p-5 lg:p-8">
        <div className="left-1/2 absolute top-0 h-[200px] w-full -translate-x-1/2 bg-gradient-to-b from-[rgba(22,22,22,0.80)] to-[rgba(22,22,22,0.00)] z-[1]" />
        <div className="absolute left-1/2 bottom-0 h-[350px] w-full -translate-x-1/2  bg-[linear-gradient(0deg,_rgba(22,22,22,0)_0%,_rgba(22,22,22,0.7)_51.5%,_rgba(22,22,22,0)_100%)] z-[1]" />
        <div className="z-[10] relative h-full flex flex-col justify-end items-start w-full gap-5 pb-8">          
        <h1 className="text-white font-Span">
          Embark on Unforgettable <br />
          Adventures tailored just for you!
        </h1>
        <HomeFilterBar />
        </div>
      </section>
      <section className="w-full lg:w-[1000px] m-auto my-20 grid place-content-center">
        <h2 className="font-Span inline text-green leading-[36px] lg:leading-[45px]">
        Concierge Service ipsum dolor sit amet, consectetur <br /> <img src="/image.png" className=" rounded-full inline" /> duis id quam maximus, scelerisque sapien sollicitudin
        </h2>
        <span className="mt-4 text-end block text-light_green font-Switzer text-sm tracking-[1.12px] font-normal">EXPLORE IT NOW</span>
      </section>
      <section className=" space-y-8">
        <h2 className="">Explore Properties</h2>
        <PropertyGrid className="grid justify-between grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
      </section>
    </div>
  );
}
