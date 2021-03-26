import {ClientMeetingDAL} from '../Interfaces/ClientMeetingDAL';
import {ClientMeetingModel} from "../../Model/ClientMeetingModel";
import {ContactModel} from "../../Model/ContactModule";
import {LocationModel} from "../../Model/LocationModel";
import {ClientModel} from "../../Model/ClientModel";
import {Connection} from "../connection";

export class ClientMeetingDALImpl implements ClientMeetingDAL {

    private contactModel: ContactModel = {id: 1, lastName:"Sandor", firstName:'Matyas', email:'matyas@asd.hu'};
    private locationModel: LocationModel = {id: 1, address: "Mora Ferenc",cityName: "Szeged"};
    private clientMeetingModel: ClientMeetingModel ={id: 1, appointment:new Date(2022,1,  4).getTime(),contact: [this.contactModel], location: this.locationModel};

    constructor() {
    };

    createClientMeeting(clientMeeting:ClientMeetingModel): void {
        console.log('create client meeting in DB' + clientMeeting);
        Connection.executeStatement("INSERT STATEMENT");
    }

    updateClientMeeting(clientMeeting:ClientMeetingModel): void {
        console.log('update client meeting in DB' + clientMeeting);
        Connection.executeStatement("UPDATE STATEMENT");
    }

    deleteClientMeeting(id: number): void {
        console.log('delete client meeting in DB' + id);
        Connection.executeStatement("DELETE STATEMENT");
    }

    getAllClientMeeting(): ClientMeetingModel[] {
        console.log('get all client meeting in DB');
        Connection.executeStatement("SELECT STATEMENT");
        return [this.clientMeetingModel];
    }

    getClientMeeting(id: number): ClientMeetingModel {
        console.log('get on client meeting in DB' + id);
        Connection.executeStatement("SELECT STATEMENT");
        return this.clientMeetingModel;
    }
}

