import PropertyFilterComponent from "@/components/Filter/PropertyFilters";
import PropertyGrid from "@/components/PropertyComponents/PropertyGrid";
import PropertyMap from "@/components/PropertyComponents/PropertyMap";
import PropertySlider from "@/components/PropertyComponents/PropertySlider";
import { getProperties } from "@/serverAction/PropertiesAPI";

const PropertyListingPage = async () => {
  const getProperty = await getProperties({limit:5});
  return (
      <div className="space-y-8">
        <section className="mb-8 border-t border-b border-gray py-5 flex justify-evenly">
          {/* Lets create a copy of below div using array method */}
          {Array(10).fill(0).map((_, index) => {
            return (
              <div key={index} className="text-sm text-light_green flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray"/>
              <span>Amazing Views</span>
            </div>
            )
          })}         
         
        </section>
        <section className="flex flex-col lg:flex-row">
          <div className="mb-6 w-full border border-gray rounded-xl p-4 lg:mb-0 lg:w-1/4">
            <PropertyFilterComponent />
          </div>
          <div className="w-full lg:w-full lg:pl-6">
            <PropertyGrid className="grid justify-between gap-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" PostPerPage={5} />
          </div>
        </section>
          <section className=" space-y-8">
        <h2 className="">Our Recommendations</h2>
        <PropertySlider className="mt-10" />
      </section>
      </div>

  );
};

export default PropertyListingPage;
