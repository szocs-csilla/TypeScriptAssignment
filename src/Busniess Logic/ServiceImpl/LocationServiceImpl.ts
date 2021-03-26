import {LocationService} from '../Service/LocationService'
import {LocationModel} from "../../Model/LocationModel";
import {LocationDAL} from "../../DAL/Interfaces/LocationDAL";

export class LocationServiceImpl implements LocationService {

    private locationDAL: LocationDAL;

    constructor(locationDAL: LocationDAL) {
        this.locationDAL = locationDAL;
    }


    createLocation(newLocation: LocationModel): void {
        let getAllLocation: LocationModel[] = this.locationDAL.getAllLocation();
        getAllLocation.forEach((location:LocationModel) => {
            if(newLocation.address === location.address){
                throw new Error('the location is already exists');
            }
        });
        this.locationDAL.createLocation(newLocation);
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
