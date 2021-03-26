import {ContactDAL} from "../../DAL/Interfaces/ContactDAL";
import {ContactModel} from "../../Model/ContactModule";
import {LocationModel} from "../../Model/LocationModel";

export interface ContactService {

    createContact(contact: ContactModel): void;

    updateContact(contact: ContactModel): void;

    deleteContact(id: number): void;

    getContact(id: number): ContactModel;

    getAllContact(): ContactModel[];
}
