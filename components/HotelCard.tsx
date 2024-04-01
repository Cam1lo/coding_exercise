"use client";

import { Hotel } from "@/core/interfacaes/hotel";
import Image from "next/image";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
    return (
        <div
            onClick={() => {
                window.location.href = `/${hotel.id}`;
            }}
            className="border cursor-pointer flex flex-col min-h-96 sm:flex-row border-[#2f2e27] sm:min-w-[30rem] rounded-lg">
            <Image
                loading="lazy"
                className="md:rounded-l-lg tranform scale-[1.007] w-full sm:w-1/2 object-cover"
                src={hotel.image}
                alt={hotel.name}
                height={250}
                width={250}></Image>
            <div className="flex flex-col w-full justify-between p-4">
                <div>
                    <h2 className="text-3xl font-medium">{hotel.name}</h2>
                    <p className="text">{hotel.rating}</p>
                    <p className="text">{hotel.description}</p>
                </div>
                <div className="ml-auto">
                    <p className="text-sm">{hotel.location}</p>
                    <p className="text-sm">From ${hotel.from_price}</p>
                </div>
            </div>
        </div>
    );
}
