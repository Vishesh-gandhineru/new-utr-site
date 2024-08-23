import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingCard from "@/components/dashboard/bookingComponent/BookingCard";
import BookingCardFilter from "@/components/dashboard/bookingComponent/BookingCardFilter";
import { fetchAllBookings } from "@/serverAction/BookingAPI";
import { BookingCardType } from "@/types/types";


type DashboardPageProps = {
  params: {
    slug: string;
  };
  searchParams: any;
};


const DashboardPage = async ({ params , searchParams } : DashboardPageProps ) => {
 
  const Status = searchParams.status
  const fetchBookings = await fetchAllBookings();

  const filteredBookings = Status
  ? fetchBookings.filter((booking: BookingCardType) => booking.status === Status)
  : fetchBookings;

  return (
    <main>
      <section>
          <DashboardLayout>
          <div className="flex justify-between">
            <div>
      <h1>Dashboard Overview</h1>
      <h3>Welcome to your property booking dashboard!</h3>
      <h4>Here you can view and manage all your bookings.</h4>

            </div>
<div>
  <h3>Filter</h3>
  <BookingCardFilter />
</div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-8">
        {filteredBookings.reverse().map((booking : BookingCardType) => {
          return (
            <BookingCard key={booking.id} booking={booking} />
          );
        })}
      </div>
          </DashboardLayout>
      </section>
    </main>
  );
};


export default DashboardPage;