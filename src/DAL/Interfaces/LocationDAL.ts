import {LocationModel} from "../../Model/LocationModel";
import {ClientModel} from "../../Model/ClientModel";

export interface LocationDAL {

    createLocation(location: LocationModel): void;

    updateLocation(location: LocationModel): void;

    deleteLocation(id: number): void;

    getLocation(id: number): LocationModel;

    getAllLocation(): LocationModel[];
}
