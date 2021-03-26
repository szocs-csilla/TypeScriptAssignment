import {LocationDAL} from '../Interfaces/LocationDAL';
import {LocationModel} from "../../Model/LocationModel";
import {Connection} from "../connection";

export class LocationDALImpl implements LocationDAL {

    private locationModel: LocationModel = {id: 1, address: "Mora Ferenc",cityName: "Szeged"};

    constructor() {
    }

    createLocation(location: LocationModel): void {
        console.log('create location in DB');
        Connection.executeStatement("INSERT STATEMENT");
    }

    updateLocation(location: LocationModel): void {
        console.log('update location in DB');
        Connection.executeStatement("UPDATE STATEMENT");
    }

    deleteLocation(id: number): void {
        console.log('delete location in DB');
        Connection.executeStatement("DELETE STATEMENT");
    }

    getAllLocation(): LocationModel[] {
        console.log('get all location in DB');
        Connection.executeStatement("SELECT STATEMENT");
        return [this.locationModel];
    }

    getLocation(id: number): LocationModel {
        console.log('get one location in DB');
        Connection.executeStatement("SELECT STATEMENT");
        return this.locationModel;
    }


}

