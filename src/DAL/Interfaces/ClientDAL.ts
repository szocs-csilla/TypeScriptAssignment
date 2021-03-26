import {ClientModel} from "../../Model/ClientModel";

export interface ClientDAL {

    createClient(client: ClientModel): void;

    updateClient(client: ClientModel): void;

    deleteClient(id: number): void;

    getClient(id: number): ClientModel;

    getAllClient(): ClientModel[];
}
