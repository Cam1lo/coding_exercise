export async function getHotels() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return fetch(`http://localhost:3000/api/hotels`)
        .then(response => response.json())
        .then(data => data);
}

export async function getHotelById(id: string) {
    return fetch(`http://localhost:3000/api/hotels/${id}`)
        .then(response => response.json())
        .then(data => data);
}
