import HotelCard from "@/components/HotelCard";
import HotelsGrid from "@/components/HotelsGrid";
import { getHotels } from "@/core/api/hotels";
import { Hotel } from "@/core/interfacaes/hotel";

export default async function Home() {
    const hotels: Array<Hotel> = await getHotels();

    return (
        <div className="mt-20 p-10">
            <div className="mb-10">
                <span className="text-2xl font-bold">This is our selection to you</span>
                <br />
                <span>Hope you find the perfect one</span>
            </div>
            <HotelsGrid hotels={hotels} />
        </div>
    );
}
