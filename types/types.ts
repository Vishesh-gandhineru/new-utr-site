export type ColumnType = "compare1" | "compare2" | "compare3" | null;

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
  propertyId: string | number
    name: string
    images: { displayPriority: number; url: string; type: string; _id: string }[]
    address: string
    city: string
    state: string
    country: string
    slug: string
};


export type PropertyGeneral = {
  minOccupancy: number;
  address: string;
  city: string;
  checkinFrom: string;
  postalCode: string;
  latitude: number;
  licenseCode: string;
  typeCode: string;
  type: string;
  countryCode: string;
  maxPets: number;
  name: string;
  checkoutFrom: string;
  checkoutUntil: string;
  state: string;
  maxOccupancy: number;
  maxAdults: number;
  additionalChildren: number;
  parkCode: string;
  region: string;
  longitude: number;
  checkinUntil: string;
  _id: string;
}


export type BookingCardType = {
  id: number;
  propertyName: string;
  slug: string;
  checkIn: string;
  checkOut: string;
  status: string;
  location: string;
  address : string;
  currency: string;
  breakdown: {
    total: number;
  };
};

export type LocationType = {
  key: string;
  label: string;
  value: string;
  state: string;
  city: string;
  PropertyName: string;
  PropertyAddress: string;
  PropertySlug : string;
}