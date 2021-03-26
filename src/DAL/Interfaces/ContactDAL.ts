import {ContactModel} from "../../Model/ContactModule";

export interface ContactDAL {

    createContact(contact: ContactModel): void;

    updateContact(contact: ContactModel): void;

    deleteContact(id: number): void;

    getContact(id: number): ContactModel;

    getAllContact(): ContactModel[];
}
