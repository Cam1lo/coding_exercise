import { Hotel } from "../interfacaes/hotel";

const HOTELS: Array<Hotel> = [
    {
        id: "hotel1",
        name: "Grand Hotel",
        description: "Luxurious accommodation with stunning views of the city skyline.",
        image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        rating: 4.5,
        from_price: 200,
        location: "Downtown, Miami",
        position: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    {
        id: "hotel2",
        name: "Seaside Resort",
        description: "Escape to this tranquil resort nestled along the coast, offering premium amenities and activities.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        rating: 4.2,
        from_price: 180,
        location: "Beachfront, Sydney",
        position: {
            lat: -33.8679,
            lng: 151.2073
        }
    },
    {
        id: "hotel3",
        name: "Mountain Lodge",
        description: "Experience nature at its finest in this cozy lodge surrounded by breathtaking mountain scenery.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.7,
        from_price: 250,
        location: "Mountain Range, Tokyo",
        position: {
            lat: 35.6895,
            lng: 139.6917
        }
    },
    {
        id: "hotel4",
        name: "Urban Oasis",
        description: "A hidden gem in the heart of the city offering a peaceful retreat amidst the urban hustle.",
        image: "https://plus.unsplash.com/premium_photo-1664123873407-e2d9a3d65126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.3,
        from_price: 160,
        location: "City Center, Rio de Janeiro",
        position: {
            lat: -22.9068,
            lng: -43.1729
        }
    },
    {
        id: "hotel5",
        name: "Riverside Inn",
        description: "Charming riverside inn offering comfortable rooms and waterfront dining.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.6,
        from_price: 220,
        location: "Riverfront, Paris",
        position: {
            lat: 48.8566,
            lng: 2.3522
        }
    },
    {
        id: "hotel6",
        name: "Skyline Suites",
        description: "Elegant suites with panoramic views of the city skyline, perfect for a luxurious stay.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.8,
        from_price: 300,
        location: "Highrise District, Moscow",
        position: {
            lat: 55.7558,
            lng: 37.6176
        }
    },
    {
        id: "hotel7",
        name: "Tropical Hideaway",
        description: "Discover paradise at this tropical hideaway, surrounded by lush gardens and pristine beaches.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.4,
        from_price: 190,
        location: "Island Retreat, Buenos Aires",
        position: {
            lat: -34.6037,
            lng: -58.3816
        }
    },
    {
        id: "hotel8",
        name: "Historic Mansion",
        description: "Step back in time at this historic mansion turned luxury hotel, offering opulent accommodations and fine dining.",
        image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fHww",
        rating: 4.9,
        from_price: 350,
        location: "Historic District, London",
        position: {
            lat: 51.5074,
            lng: -0.1278
        }
    }
];

// Exporting the array of hotels
export default HOTELS;
