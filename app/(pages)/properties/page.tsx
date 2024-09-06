import PropertyFilterComponent from "@/components/Filter/PropertyFilters";
import PropertyGrid from "@/components/PropertyComponents/PropertyGrid";
import PropertyMap from "@/components/PropertyComponents/PropertyMap";
import { getProperties } from "@/serverAction/PropertiesAPI";

const PropertyListingPage = async () => {
  const getProperty = await getProperties({limit:5});
  return (
      <div className="">
        <div className="mb-8 border-t border-b border-gray py-3 flex justify-evenly">
          {/* Lets create a copy of below div using array method */}
          {Array(10).fill(0).map((_, index) => {
            return (
              <div key={index} className="text-sm text-light_green flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray"/>
              <span>Amazing Views</span>
            </div>
            )
          })}         
         
        </div>
        <div className="flex flex-col lg:flex-row">
          <section className="mb-6 w-full border-[1px] p-5 lg:mb-0 lg:w-1/6">
            <PropertyFilterComponent />
          </section>
          <section className="w-full lg:w-full lg:pl-6">
            <PropertyGrid className="grid justify-between gap-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" />
          </section>
          <div>
            {/* <PropertyMap properties={getProperty.properties} /> */}
          </div>
        </div>
      </div>

  );
};

export default PropertyListingPage;
