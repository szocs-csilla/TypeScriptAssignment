import {ClientModel} from "../../Model/ClientModel";
import {ClientMeetingModel} from "../../Model/ClientMeetingModel";

export interface ClientService {

    createClient(client: ClientModel): void;

    updateClient(client: ClientModel): void;

    deleteClient(id: number): void;

    getClient(id: number): ClientModel;

    getAllClient(): ClientModel[];
}
