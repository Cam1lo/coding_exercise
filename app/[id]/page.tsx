import HotelCard from "@/components/HotelCard";
import { getHotelById } from "@/core/api/hotels";
import { Hotel as IHotel } from "@/core/interfacaes/hotel";

export default async function Hotel({ params }: { params: { id: string } }) {
    const hotel: IHotel = await getHotelById(params.id);
    return (
        <div className="my-24 flex flex-col gap-10">
            <a href="/" className="underline text-yellow-600">
                Go Back
            </a>
            <HotelCard hotel={hotel} />
        </div>
    );
}
