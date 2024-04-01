import HOTELS from "@/core/constants/hotels";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const hotel = HOTELS.find((hotel) => hotel.id === id);
    res.status(200).json(hotel);
}