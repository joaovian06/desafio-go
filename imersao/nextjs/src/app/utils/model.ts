import type { DirectionsResponseData } from "@googlemaps/google-maps-services-js";

export type Route = {
    id: string;
    name: string;
    source: { name: string; location: { lat: number; lng: number } };
    distance: number;
    duration: number;
    destination: { name: string; location: { lat: number; lng: number } };
    directions: DirectionsResponseData & { request: any };
    created_at: Date;
    update_at: Date;
}