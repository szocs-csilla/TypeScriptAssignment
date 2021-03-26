import {LocationService} from '../Service/LocationService'
import {LocationModel} from "../../Model/LocationModel";
import {LocationDAL} from "../../DAL/Interfaces/LocationDAL";

export class LocationServiceImpl implements LocationService {

    private locationDAL: LocationDAL;

    constructor(locationDAL: LocationDAL) {
        this.locationDAL = locationDAL;
    }


    createLocation(location: LocationModel): void {
        this.locationDAL.createLocation(location);
    }

    deleteLocation(id: number): void {
        this.locationDAL.deleteLocation(id);
    }

    updateLocation(location: LocationModel): void {
        this.locationDAL.updateLocation(location);
    }

    getAllLocation(): LocationModel[] {
        return this.locationDAL.getAllLocation();
    }

    getLocation(id: number): LocationModel {
        return this.locationDAL.getLocation(id);
    }

}
