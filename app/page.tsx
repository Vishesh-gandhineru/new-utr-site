import { getProperties, getPropertyPolicies, getSinglePropertyBySlug } from "@/serverAction/PropertiesAPI";
import Image from "next/image";

export default async function Home() {

  const singleProperty = await getPropertyPolicies("nextpax-demo-1");
  console.log(singleProperty)
  return (
    <main>
      <section>
        <h1>Home page</h1>
      </section>
    </main>
  );
}
