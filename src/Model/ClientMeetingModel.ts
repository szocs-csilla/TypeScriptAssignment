import {ContactModel} from './ContactModule';
import {LocationModel} from './LocationModel';

export class ClientMeetingModel {

     id: number;
     appointment: number;
     contact: ContactModel[];
     location: LocationModel;
}
