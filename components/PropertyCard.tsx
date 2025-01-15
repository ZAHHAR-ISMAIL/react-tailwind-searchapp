import { Property } from "@/types/property";
import { Bath } from "lucide-react";

const amenitiesLabels: Record<keyof Property["amenities"], string> = {
  aircon: "Air Conditioning",
  appletv: "Apple TV",
  btspeakers: "BT Speakers",
  cardkey: "Card Key",
  chromecast: "Chromecast",
  fireplace: "Fireplace",
  hdtv: "HDTV",
  jacuzzi: "Jacuzzi",
  nespresso: "Nespresso",
};

export default function PropertyCard({ property }: { property: Property }) {
  const activeAmenities = Object.entries(property.amenities)
    .filter(([, value]) => value)
    .map(([key]) => amenitiesLabels[key as keyof Property["amenities"]]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {property.description}
        </p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {activeAmenities.map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
