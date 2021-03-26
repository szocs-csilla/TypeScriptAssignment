import {ContactModel} from './ContactModule';
import {LocationModel} from './LocationModel';
import {ClientMeetingModel} from './ClientMeetingModel';

export class ClientModel {

   clientName: string;
   taxNumber: number;
   id: number;
   contact: ContactModel[];
   location: LocationModel[];
   clientMeeting: ClientMeetingModel[];

}
