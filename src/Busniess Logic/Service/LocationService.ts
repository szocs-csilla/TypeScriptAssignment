import {LocationModel} from "../../Model/LocationModel";
import {ClientMeetingModel} from "../../Model/ClientMeetingModel";

export interface LocationService {

    createLocation(location: LocationModel): void;

    updateLocation(location: LocationModel): void;

    deleteLocation(id: number): void;

    getLocation(id: number): LocationModel;

    getAllLocation(): LocationModel[];
}
