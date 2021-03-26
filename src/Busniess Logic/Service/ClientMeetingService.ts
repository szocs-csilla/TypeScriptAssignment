import {ClientMeetingModel} from "../../Model/ClientMeetingModel";

export interface ClientMeetingService {

    createClientMeeting(clientMeeting: ClientMeetingModel): void;

    updateClientMeeting(clientMeeting: ClientMeetingModel): void;

    deleteClientMeeting(id: number): void;

    getClientMeeting(id: number): ClientMeetingModel;

    getAllClientMeeting(): ClientMeetingModel[];
}
