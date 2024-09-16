import HomeFilterBar from "@/components/Filter/HomeFilterBar";
import PropertySlider from "@/components/PropertyComponents/PropertySlider";
import Faqs from "@/components/Faqs/Faqs";

export default async function Home() {
  return (
    <div className="space-y-[50px]">
      <section className="heroSlider relative h-[500px] overflow-hidden rounded-[20px] bg-HomeHeroBg bg-cover bg-center bg-no-repeat p-5 lg:p-8">
        <div className="absolute left-1/2 top-0 z-[1] h-[200px] w-full -translate-x-1/2 bg-gradient-to-b from-[rgba(22,22,22,0.80)] to-[rgba(22,22,22,0.00)]" />
        <div className="absolute bottom-0 left-1/2 z-[1] h-[350px] w-full -translate-x-1/2 bg-[linear-gradient(0deg,_rgba(22,22,22,0)_0%,_rgba(22,22,22,0.7)_51.5%,_rgba(22,22,22,0)_100%)]" />
        <div className="relative z-[10] flex h-full w-full flex-col items-start justify-end gap-5 pb-8">
          <h1 className="font-Span text-white">
            Embark on Unforgettable <br />
            Adventures tailored just for you!
          </h1>
          <HomeFilterBar />
        </div>
      </section>
      <section className="m-auto my-20 grid w-full place-content-center lg:w-[1000px]">
        <h2 className="inline font-Span leading-[36px] text-green lg:leading-[45px]">
          Concierge Service ipsum dolor sit amet, consectetur <br />{" "}
          <img src="/image.png" className="inline rounded-full" /> duis id quam
          maximus, scelerisque sapien sollicitudin
        </h2>
        <span className="mt-4 block text-end font-Switzer text-sm font-normal tracking-[1.12px] text-light_green">
          EXPLORE IT NOW
        </span>
      </section>
      <section className="space-y-8">
        <h2 className="">Explore Properties</h2>
        <PropertySlider className="mt-10" />
      </section>
      <section className="m-auto w-full space-y-8 lg:w-[80%]">
        <h2>FAQs</h2>
        <Faqs />
      </section>
    </div>
  );
}
