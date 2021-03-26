import {ClientMeetingModel} from "../../Model/ClientMeetingModel";

export interface ClientMeetingDAL {

    createClientMeeting(clientMeeting: ClientMeetingModel): void;

    updateClientMeeting(clientMeeting: ClientMeetingModel): void;

    deleteClientMeeting(id: number): void;

    getClientMeeting(id: number): ClientMeetingModel;

    getAllClientMeeting(): ClientMeetingModel[];
}
