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
