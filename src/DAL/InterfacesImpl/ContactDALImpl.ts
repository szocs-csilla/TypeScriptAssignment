import {ContactDAL} from '../Interfaces/ContactDAL';
import {ContactModel} from "../../Model/ContactModule";
import {Connection} from "../connection";

export class ContactDALImpl implements ContactDAL {

    private contactModel: ContactModel = {id: 1, lastName:"Sandor", firstName:'Matyas', email:'matyas@asd.hu'};

    constructor() {
    };

    createContact(contact:ContactModel): void {
        console.log('create contact in DB' + contact);
        Connection.executeStatement("INSERT STATEMENT");
    }

    updateContact(contact:ContactModel): void {
        console.log('update contact in DB' + contact);
        Connection.executeStatement("INSERT STATEMENT");
    }

    deleteContact(id: number): void {
        console.log('delete contact in DB' + id);
        Connection.executeStatement("DELETE STATEMENT");
    }

    getAllContact(): ContactModel[] {
        console.log('get on contact in DB' );
        Connection.executeStatement("SELECT STATEMENT");
        return [this.contactModel];
    }

    getContact(id: number): ContactModel {
        console.log('get on contact in DB' + id);
        Connection.executeStatement("SELECT STATEMENT");
        return this.contactModel;
    }
}

