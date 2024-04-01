import HOTELS from "@/core/constants/hotels";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(HOTELS);
}
