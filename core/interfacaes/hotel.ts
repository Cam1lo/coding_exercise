export interface Hotel {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    from_price: number;
    location: string;
    position: {
        lat: number;
        lng: number;
    }
}