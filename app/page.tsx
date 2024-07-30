import { getProperties, getPropertyPolicies, getSinglePropertyBySlug } from "@/serverAction/PropertiesAPI";
import DataRangePicker from "@/components/ui/DatePicker";
import Image from "next/image";
import Calender from "@/components/ui/calender";
import PhoneInput from "@/components/PhoneInput";

export default async function Home() {

  const singleProperty = await getPropertyPolicies("nextpax-demo-1");

  return (
    <main>
      <section>
        <h1>Home page</h1>
        <DataRangePicker />
        <Calender />
        <PhoneInput />  
      </section>
    </main>
  );
}
