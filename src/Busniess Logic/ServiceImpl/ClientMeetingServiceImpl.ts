import {ClientMeetingService} from '../Service/ClientMeetingService';
import {ClientMeetingDAL} from "../../DAL/Interfaces/ClientMeetingDAL";
import {ClientMeetingModel} from "../../Model/ClientMeetingModel";


export class ClientMeetingServiceImpl implements ClientMeetingService {

    private clientMeetingDAL: ClientMeetingDAL;

    constructor(clientMeetingDAL: ClientMeetingDAL) {
        this.clientMeetingDAL = clientMeetingDAL;
    }

    createClientMeeting(clientMeeting: ClientMeetingModel): void {
        let dateTime = new Date().getTime();
        console.log('ido' + clientMeeting.appointment);
        console.log('time' + dateTime);

        if(clientMeeting.appointment > dateTime){
            this.clientMeetingDAL.createClientMeeting(clientMeeting);
        }else{
            throw new Error('the appointment is not good');
        }

    }

    deleteClientMeeting(id: number): void {
        this.clientMeetingDAL.deleteClientMeeting(id);
    }

    updateClientMeeting(clientMeeting: ClientMeetingModel): void {
        let dateTime = new Date().getTime();
        console.log('ido' + clientMeeting.appointment);
        console.log('time' + dateTime);
        if(clientMeeting.appointment > dateTime){
            this.clientMeetingDAL.updateClientMeeting(clientMeeting);
        }else{
            throw new Error('the appointment is not good');
        }
    }

    getAllClientMeeting(): ClientMeetingModel[] {
        return this.clientMeetingDAL.getAllClientMeeting();
    }

    getClientMeeting(id: number): ClientMeetingModel {
        return this.getClientMeeting(id);
    }

}
