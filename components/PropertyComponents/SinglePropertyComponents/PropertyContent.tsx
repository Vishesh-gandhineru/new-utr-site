import React from "react";
import { Card, Divider, Avatar } from "antd";
import {
  AwardIcon,
  StarIcon,
  CalendarCheckIcon,
  MedalIcon,
  MapPinIcon,
  UserCircle2Icon,
} from "lucide-react";
import Link from "next/link";
import { PropertyGeneral } from "@/types/types";
import ContentAnchor from "./ContentAnchor";
import { cn } from "@/lib/utils";

type PropertyContentProps = {
  content: {
    general: PropertyGeneral;
    descriptions: Array<{
      text: string;
      type: string;
      typeCode: string;
      _id: string;
    }>;
    amenities: Array<{
      attribute: any[];
      typeCode: string;
      type: string;
      _id: string;
    }>;
  };
};

const PropertyContent = ({ content }: PropertyContentProps) => {
  const { descriptions, amenities } = content;
  return (
    <div>
      <ContentAnchor />
      <div className="mt-10 space-y-[80px]">
        <section id="About" className="space-y-3">
          <h2 className="font-Switzer text-base uppercase  text-green"> About</h2>
          <div className="">
            {descriptions.map((description) => {
              return (
                <p
                  key={description.typeCode}
                  className="text-base capitalize text-gray"
                >
                  {description.text}
                </p>
              );
            })}
          </div>
          <div className="!mt-12 flex gap-5">
            <div className="grid w-[250px] place-content-center rounded-[20px] border border-gray p-6 text-sm text-gray">
              Popular amongst people looking for weekend vacation
            </div>
            <div className="grid w-[250px] place-content-center rounded-[20px] border border-gray p-6 text-sm text-gray">
              Popular amongst people looking for weekend vacation
            </div>
          </div>
        </section>
        <section id="Amenities" className="space-y-5">
          <h2 className="font-Switzer text-base uppercase text-green">Amenities</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-5">
            {amenities.map((amenity) => {
              return (
                <div key={amenity.typeCode} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-zinc-300" />
                  <h3 className="font-Switzer text-sm font-normal capitalize ">
                    {amenity.type}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
        <section id="Meals" className="h-[400px] bg-[#657C4833]">
        <h2 className="font-Switzer text-base uppercase  text-green tracking-wider">Meals</h2>
        </section>
        <section id="Rules" className="h-[400px] bg-[#657C4833]">
        <h2 className="font-Switzer text-base uppercase  text-green tracking-wider">Rules</h2>

        </section>
        <section id="Activities" className="h-[400px] bg-[#657C4833]">
        <h2 className="font-Switzer text-base uppercase  text-green tracking-wider">Activities</h2>

        </section>
        <section id="Reviews" className="h-[400px] bg-[#657C4833]">
        <h2 className="font-Switzer text-base uppercase  text-green tracking-wider">Reviews</h2>

        </section>
        <section id="FAQs" className="h-[400px] bg-[#657C4833]">
        <h2 className="font-Switzer text-base uppercase  text-green tracking-wider">FAQs</h2>
        </section>
      </div>
    </div>
  );
};

export default PropertyContent;
