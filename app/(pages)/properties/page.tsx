import PropertyFilterComponent from '@/components/Filter/PropertyFilters';
import PropertyGrid from '@/components/PropertyComponents/PropertyGrid';
import { Suspense } from 'react';
const PropertyListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Property Listings</h1>
      </div>
    </header>
    <main className="mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/6 mb-6 lg:mb-0 border-[1px] p-5">
        <h1>Filter componet</h1>
        <PropertyFilterComponent />
        </div>
        <div className="w-full lg:w-full lg:pl-6">
         
            
              <PropertyGrid className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-between gap-5 gap-y-10" />
      
    
        </div>
      </div>
    </main>
  </div>
  );
};

export default PropertyListingPage;