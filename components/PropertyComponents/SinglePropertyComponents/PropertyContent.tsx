
import React from 'react'
import { Card , Divider ,Avatar } from 'antd'
import { AwardIcon , StarIcon , CalendarCheckIcon , MedalIcon , MapPinIcon , UserCircle2Icon  } from 'lucide-react'
import Link from 'next/link';
import { PropertyGeneral } from '@/types/types';

type PropertyContentProps = {
  content : {
    general: PropertyGeneral ;
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

  }

}


const PropertyContent = ({content} : PropertyContentProps) => {
  const {general , descriptions, amenities} = content;
  const { name, address, city, state , maxAdults , maxPets , maxOccupancy, type} = general;
  return (
    <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold capitalize">{name}</h1>
            <p className="text-muted-foreground">{`${maxOccupancy} Guests · ${maxPets} Max Pets · Type : ${type}`}</p>
          </div>
          <Card>
            <div className="relative flex items-center gap-6 p-4 sm:p-6">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                One of the most loved homes on Airbnb, according to guests.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">4.93</div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                </div>
                <Divider type="vertical" className='bg-primary !h-[30px]' />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">745</div>
                  <div className="text-xs font-semibold underline">Reviews</div>
                </div>
              </div>
              <Link href="#" className="absolute inset-0" prefetch={false}>
                <span className="sr-only">View reviews</span>
              </Link>
            </div>
          </Card>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16">
            <Avatar className='!w-full !h-full' icon={<UserCircle2Icon className='w-full h-8' />} />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Hosted by Catherine</div>
              <div className="text-sm text-muted-foreground">Joined in 2010 · Superhost</div>
            </div>
          </div>
          <Divider />
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Free cancellation for 48 hours</div>
              <div className="text-sm text-muted-foreground">Get a full refund if you change your mind.</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Catherine is a Superhost</div>
              <div className="text-sm text-muted-foreground">Superhosts are experienced, highly rated hosts.</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Great location</div>
              <div className="text-sm text-muted-foreground">
                100% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <Divider />
          <div className="prose">
            {descriptions.map((description) => {
              return (
                <div key={description._id}>
                  {description.type === 'Headline' && <h2>{description.text}</h2>}
                  <p>{description.text}</p>
                </div>
              )
            })}
          </div>
        </div>
  )
}

export default PropertyContent