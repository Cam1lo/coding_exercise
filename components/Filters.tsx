"use client";
import { useState, useEffect, use } from "react";
import { useGeolocated } from "react-geolocated";
import HotelsGrid from "./HotelsGrid";
import { Hotel } from "@/core/interfacaes/hotel";
import { getDistance } from "@/core/utils";

export default function Filters() {
    const [hotels, setHotels] = useState([]);
    const [sort, setSort] = useState("");
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 100,
    });

    useEffect(() => {
        const fetchHotels = async () => {
            const response = await fetch("/api/hotels");
            const data = await response.json();
            setHotels(data);
        };

        fetchHotels();
    }, []);

    useEffect(() => {
        if (sort === "rating") {
            setHotels([...hotels.sort((a: Hotel, b: Hotel) => b.rating - a.rating)]);
        } else if (sort === "price") {
            setHotels([...hotels.sort((a: Hotel, b: Hotel) => a.from_price - b.from_price)]);
        } else if (sort === "location" && coords) {
            const sortedHotels = hotels.sort((a: Hotel, b: Hotel) => {
                const aDistance = getDistance(a.position.lat, a.position.lng, coords.latitude, coords.longitude);
                const bDistance = getDistance(b.position.lat, b.position.lng, coords.latitude, coords.longitude);
                return aDistance - bDistance;
            });

            setHotels([...sortedHotels]);
        }
    }, [sort]);

    return (
        <div className="mt-20 p-10">
            <div className="mb-10">
                <span className="text-2xl font-bold">Sort By</span>
                <br />
                <div className="flex gap-4 mt-4">
                    <span
                        onClick={() => setSort("price")}
                        className={sort === "price" ? "text-yellow-600 underline cursor-pointer" : "cursor-pointer"}>
                        Price
                    </span>
                    <span
                        onClick={() => setSort("rating")}
                        className={sort === "rating" ? "text-yellow-600 underline cursor-pointer" : "cursor-pointer"}>
                        Rating
                    </span>

                    <span
                        onClick={() => setSort("location")}
                        className={sort === "location" ? "text-yellow-600 underline cursor-pointer" : "cursor-pointer"}>
                        Near me
                    </span>
                </div>
            </div>
            <HotelsGrid hotels={hotels} />
        </div>
    );
}
