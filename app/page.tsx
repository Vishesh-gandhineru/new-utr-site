
import Calender from "@/components/ui/calender";
import HomeFilterBar from "@/components/Filter/HomeFilterBar";
import LoginForm from "@/components/LoginComponents/LoginForm";
import Header from "@/components/Header/Header";


export default async function Home() {
  return (
    <main className="container mt-8">
      <Header />
      <section className=" space-y-4">
        <HomeFilterBar />
        <Calender />
        <LoginForm />
      </section>
    </main>
  );
}
