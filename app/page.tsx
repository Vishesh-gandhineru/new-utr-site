
import Calender from "@/components/ui/calender";
import HomeFilterBar from "@/components/Filter/HomeFilterBar";
import LoginForm from "@/components/LoginComponents/LoginForm";
import MainMenu from "@/components/Header/Header";
import Signupform from "@/components/LoginComponents/signupForm";
import { getProperties } from "@/serverAction/PropertiesAPI";
import PropertyGrid from "@/components/PropertyComponents/PropertyGrid";


export default async function Home() {
  const getProperty = await getProperties({limit:5});
  return (
    <main className="container mt-8">
      <section className=" space-y-4">
        <HomeFilterBar />
        <Calender />
        <div className="border-2 w-fit p-5 rounded-xl space-y-4">
       <h2>Login component</h2>
        <LoginForm />
        </div>
        <div className="border-2 w-fit p-5 rounded-xl space-y-4">
       <h2>signup component</h2>
        <Signupform />
        </div>
        <div>
          <PropertyGrid className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6" />
        </div>
      </section>
    </main>
  );
}
