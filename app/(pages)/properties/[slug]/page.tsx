import GuestSelectionPopover from '@/components/PropertyComponents/SinglePropertyComponents/GuestSelectionPopover'
import PropertyBookingDatePicker from '@/components/PropertyComponents/SinglePropertyComponents/PropertyBookingDatePicker'
import PropertyContent from '@/components/PropertyComponents/SinglePropertyComponents/PropertyContent'
import PropertyImageGrid from '@/components/PropertyComponents/SinglePropertyComponents/PropertyImageGrid'
import { getSinglePropertyBySlug } from '@/serverAction/PropertiesAPI'
import React from 'react'

type PropertySinglePageProps = {
  params : {
    slug: string
  }

}
const PropertySinglePage = async ({params}: PropertySinglePageProps) => {
  const slug = params.slug
  // const getSingleProperty = await getSinglePropertyBySlug(slug);
  return (
    <main>
        <section className="container">
            <h1 className="text-2xl">Property Single page {slug}</h1>
        </section>
        <section className="container">
          <PropertyImageGrid images={[]} />
        </section>
        <section className="container grid grid-cols-3 gap-8">
          <div className=' col-span-2'>
            <PropertyContent  />
          </div>
          <div className=' col-span-1'>
      <div>
        <PropertyBookingDatePicker bookedDateRanges={[]} />
      </div>
      <div>
        <GuestSelectionPopover />
      </div>

          </div>
        </section>
    </main>
  )
}

export default PropertySinglePage