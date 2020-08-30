export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: LatLng;
}

export interface Company {
    name: string;
    cathchPhrase: string;
    bs: string;
}

export interface LatLng {
    lat: string;
    lng: string;
}
