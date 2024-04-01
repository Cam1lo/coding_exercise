import { Hotel } from "@/core/interfacaes/hotel";
import HotelCard from "./HotelCard";

export default async function HotelsGrid({ hotels }: { hotels: Array<Hotel> }) {
    return (
        <div className="grid 3xl:grid-cols-3 gap-x-36 gap-y-12 xl:grid-cols-2">
            {hotels.map((hotel: Hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
    );
}
