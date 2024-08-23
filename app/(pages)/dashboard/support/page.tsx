import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SupportForm from "@/components/dashboard/SupportComponent/SupportForm";

const Support = () => {
  return (
    <main>
      <section>
          <DashboardLayout>
      <h1>Support Overview</h1>
      <p>Welcome to your property booking dashboard!</p>
          <SupportForm />
          </DashboardLayout>
      </section>
    </main>
  );
};


export default Support;