import { Hotel } from "../interfacaes/hotel";

export async function getHotels() {
    return fetch(process.env.API_URL + `/hotels/`)
        .then(response => response.json())
        .then(data => data);
}

export async function getHotelById(id: string) {
    return fetch(process.env.API_URL + `/hotels/${id}`)
        .then(response => response.json())
        .then(data => data);
}
