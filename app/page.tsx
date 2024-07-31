import {
  getProperties,
  getPropertyPolicies,
  getSinglePropertyBySlug,
} from "@/serverAction/PropertiesAPI";
import DataRangePicker from "@/components/ui/DatePicker";
import Image from "next/image";
import Calender from "@/components/ui/calender";
import PhoneInput from "@/components/PhoneInput";
import LocationSearch from "@/components/LocationSearch";
import AddGuest from "@/components/AddGuest";

export default async function Home() {
 
  return (
    <main className="container mt-8">
      <section className=" space-y-4">
        <h1>Home page</h1>
        <DataRangePicker />
        <Calender />
        <PhoneInput />
        <LocationSearch />
        <AddGuest />
      </section>
    </main>
  );
}
