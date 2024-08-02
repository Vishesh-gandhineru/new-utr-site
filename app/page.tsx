
import Calender from "@/components/ui/calender";
import HomeFilterBar from "@/components/Filter/HomeFilterBar";
import LoginForm from "@/components/LoginComponents/LoginForm";
import Header from "@/components/Header/Header";
import Signupform from "@/components/LoginComponents/signupForm";


export default async function Home() {
  return (
    <main className="container mt-8">
      <Header />
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
      </section>
    </main>
  );
}
