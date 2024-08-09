import { Card } from "antd"
import { Button } from "antd";
import Link from "next/link"
import { UserIcon , BabyIcon , PawPrintIcon , CalendarIcon } from "lucide-react"
import { Divider } from "antd";
export default function Component() {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg" hoverable>
      <Link href="#" className="block" prefetch={false}>
        <img
          src="/placeholder.svg"
          alt="Property Image"
          width="400"
          height="200"
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "400/200", objectFit: "cover" }}
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Link href="#" className="text-lg font-semibold hover:text-primary" prefetch={false}>
            Modern Townhouse
          </Link>
          <div className="text-primary font-bold">$450,000</div>
        </div>
        <div className="text-muted-foreground text-sm mb-4">123 Main St, Anytown USA</div>
        <div className="flex items-center text-muted-foreground text-sm mb-6">
          <UserIcon className="w-4 h-4 mr-2" />
          2 Adults
          <Divider className="mx-2" />
          <BabyIcon className="w-4 h-4 mr-2" />
          1 Child
          <Divider className="mx-2" />
          <PawPrintIcon className="w-4 h-4 mr-2" />
          1 Pet
        </div>
        <div className="flex items-center text-muted-foreground text-sm mb-6">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Check-in: 4/2/2024, 3:00 PM
          <Divider className="mx-2" />
          <CalendarIcon className="w-4 h-4 mr-2" />
          Check-out: 10/2/2024, 11:00 AM
        </div>
        <Button className="w-full">
          View Details
        </Button>
      </div>
    </Card>
  )
}

