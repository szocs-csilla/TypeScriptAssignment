import {ContactService} from '../Service/ContactService'
import {ContactDAL} from "../../DAL/Interfaces/ContactDAL";
import {ContactModel} from "../../Model/ContactModule";

export class ContactServiceImpl implements ContactService{

    private contactDAL: ContactDAL;

    constructor(contactDAL: ContactDAL){
        this.contactDAL= contactDAL;

    }

    createContact(contact: ContactModel): void {
        this.contactDAL.createContact(contact);
    }

    deleteContact(id: number): void {
        this.contactDAL.deleteContact(id);
    }

    updateContact(contact: ContactModel): void {
        this.contactDAL.updateContact(contact);
    }

    getAllContact(): ContactModel[] {
        return this.contactDAL.getAllContact();
    }

    getContact(id: number): ContactModel {
        return this.contactDAL.getContact(id);
    }

}
