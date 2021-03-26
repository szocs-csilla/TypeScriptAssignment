import {ClientDAL} from '../Interfaces/ClientDAL';
import {ClientModel} from "../../Model/ClientModel";
import {ContactModel} from "../../Model/ContactModule";
import {LocationModel} from "../../Model/LocationModel";
import {ClientMeetingModel} from "../../Model/ClientMeetingModel";
import {Connection} from "../connection";

export class ClientDALImpl implements ClientDAL {

    private contactModel: ContactModel = {id: 1, lastName:"Sandor", firstName:'Matyas', email:'matyas@asd.hu'};
    private locationModel: LocationModel = {id: 1, address: "Mora Ferenc",cityName: "Szeged"};
    private clientMeetingModel: ClientMeetingModel ={id: 1, appointment:new Date(2022,1,  4).getTime(),contact: [this.contactModel], location: this.locationModel};
    private clientModel: ClientModel = {clientName: 'Matyas', taxNumber: 123456456, id: 1, contact:[this.contactModel],location:[this.locationModel], clientMeeting:[this.clientMeetingModel] };

    constructor() {
    }

    createClient(client: ClientModel): void {
        console.log('create client in DB' + client);
        Connection.executeStatement("INSERT STATEMENT");
    }

    updateClient(client: ClientModel): void {
        console.log('update client in DB' + client);
        Connection.executeStatement("UPDATE STATEMENT");
    }

    deleteClient(id: number): void {
        console.log('delete client in DB' + id);
        Connection.executeStatement("DELETE STATEMENT");
    }

    getAllClient(): ClientModel[] {
        console.log('get all client in DB');
        Connection.executeStatement("SELECT STATEMENT");
        return [this.clientModel];
    }

    getClient(id: number): ClientModel {
        console.log('get one client in DB' + id);
        Connection.executeStatement("SELECT STATEMENT");
        return this.clientModel;
    }
}

