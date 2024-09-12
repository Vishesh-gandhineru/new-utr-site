
import React from 'react'
import { Card , Divider ,Avatar } from 'antd'
import { AwardIcon , StarIcon , CalendarCheckIcon , MedalIcon , MapPinIcon , UserCircle2Icon  } from 'lucide-react'
import Link from 'next/link';
import { PropertyGeneral } from '@/types/types';
import ContentAnchor from './ContentAnchor';

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
        <ContentAnchor />
        <section id='About' className='bg-red-200 h-[400px]'>

        </section>
        <section id='Amenities' className='bg-green h-[400px]'>

        </section>
        <section id='Meals' className='bg-emerald-500 h-[400px]'>

        </section>
        <section id='Rules' className='bg-lime-900 h-[400px]'>

        </section>
        <section id='Activities' className='bg-amber-800 h-[400px]'>

        </section>
        <section id='Reviews' className='bg-slate-500 h-[400px]'>

        </section>
        <section id='FAQs' className='bg-black h-[400px]'>

        </section>
        </div>
  )
}

export default PropertyContent