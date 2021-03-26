import {ClientService} from '../Service/ClientService';
import {ClientDAL} from "../../DAL/Interfaces/ClientDAL";
import {ClientModel} from "../../Model/ClientModel";

export class ClientServiceImpl implements ClientService {

    private clientDAL: ClientDAL;

    constructor(clientDAL: ClientDAL) {
        this.clientDAL = clientDAL;
    }

    createClient(client:ClientModel): void {
        this.clientDAL.createClient(client);
    }

    deleteClient(id: number): void {
        this.clientDAL.deleteClient(id);
    }

    updateClient(client:ClientModel): void {
        this.clientDAL.updateClient(client);
    }

    getAllClient(): ClientModel[] {
        return this.clientDAL.getAllClient();
    }

    getClient(id: number): ClientModel {
        return this.clientDAL.getClient(id);
    }
}
