import {ClientServiceImpl} from "./Busniess Logic/ServiceImpl/ClientServiceImpl";
import {ClientDALImpl} from "./DAL/InterfacesImpl/ClientDALImpl";
import {ClientMeetingServiceImpl} from "./Busniess Logic/ServiceImpl/ClientMeetingServiceImpl";
import {ClientMeetingDALImpl} from "./DAL/InterfacesImpl/ClientMeetingDALImpl";
import {ContactServiceImpl} from "./Busniess Logic/ServiceImpl/ContactServiceImpl";
import {ContactDALImpl} from "./DAL/InterfacesImpl/ContactDALImpl";
import {LocationServiceImpl} from "./Busniess Logic/ServiceImpl/LocationServiceImpl";
import {LocationDALImpl} from "./DAL/InterfacesImpl/LocationDALImpl";
import {ClientModel} from "./Model/ClientModel";
import {ClientMeetingModel} from "./Model/ClientMeetingModel";
import {ContactModel} from "./Model/ContactModule";
import {LocationModel} from "./Model/LocationModel";

let clientService = new ClientServiceImpl(new ClientDALImpl());
let clientMeetingService = new ClientMeetingServiceImpl(new ClientMeetingDALImpl());
let contactService = new ContactServiceImpl(new ContactDALImpl());
let locationService = new LocationServiceImpl(new LocationDALImpl());

const http = require('http');
let urlLib = require('url');
require('dotenv').config();

http.createServer((request: any, response: any) => {
    const {headers, method, url} = request;
    let body: any = [];
    request.on('error', (err: any) => {
        console.error(err);
    }).on('data', (chunk: any) => {
        body.push(chunk);
    }).on('end', () => {

        if (request.method === 'POST') {
            if (request.url === '/client') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                clientService.createClient(JSON.parse(body));
            } else if (request.url === '/client_meeting') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                clientMeetingService.createClientMeeting(JSON.parse(body));
            } else if (request.url === '/contact') {
                body = Buffer.concat(body).toString();
                console.log("posttttt contact");
                // validate body placeholder
                contactService.createContact(JSON.parse(body));
            } else if (request.url === '/location') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                locationService.createLocation(JSON.parse(body));
            }
            response.statusCode = 200;
            response.end();
        } else if (request.method === 'PUT') {
            if (request.url === '/client') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                clientService.updateClient(JSON.parse(body));
            } else if (request.url === '/client_meeting') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                clientMeetingService.updateClientMeeting(JSON.parse(body));
            } else if (request.url === '/contact') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                contactService.updateContact(JSON.parse(body));
            } else if (request.url === '/location') {
                body = Buffer.concat(body).toString();
                // validate body placeholder
                locationService.updateLocation(JSON.parse(body));
            }
            response.statusCode = 200;
            response.end();
        } else if (request.method === 'GET') {
            let queryData = urlLib.parse(request.url, true).query;
            if (request.url === '/client' && !queryData.id) {
                let clients:ClientModel[] = clientService.getAllClient();
                let esString = JSON.stringify(clients);
                console.log("sending back:" + esString);
                response.write(JSON.stringify(clients));
            }else if(request.url === '/client_meeting'&& !queryData.id){
                let clientMeetings: ClientMeetingModel[] = clientMeetingService.getAllClientMeeting();
                response.write(JSON.stringify(clientMeetings));
            }else if(request.url === '/contact'&& !queryData.id){
                let contacts: ContactModel[] = contactService.getAllContact();
               response.write(JSON.stringify(contacts));
            }else if(request.url === 'location'&& !queryData.id){
                let locations: LocationModel[] = locationService.getAllLocation();
                response.write(JSON.stringify(locations));
            }else if (request.url === '/client' && queryData.id){
                let client = clientService.getClient(Number(queryData.id));
                response.write(JSON.stringify(client));
            }else if (request.url === '/client_meeting' && queryData.id){
                let clientMeeting = clientMeetingService.getClientMeeting(Number(queryData.id));
                response.write(JSON.stringify(clientMeeting));
            }else if (request.url === '/contact' && queryData.id){
                let contact = contactService.getContact(Number(queryData.id));
                response.write(JSON.stringify(contact));
            }else if (request.url === '/location' && queryData.id){
                let localhost = locationService.getLocation(Number(queryData.id));
                response.write(JSON.stringify(localhost));
            }
            response.statusCode = 200;
            response.end();
        }else if(request.method === 'DELETE'){
            let queryData = urlLib.parse(request.url, true).query;
            if(request.url === '/client' && queryData.id){
                clientService.deleteClient(Number(queryData.id));
            }else if(request.url === '/client_meeting' && queryData.id){
                clientMeetingService.deleteClientMeeting(Number(queryData.id));
            }else if(request.url === '/contact' && queryData.id){
                contactService.deleteContact(Number(queryData.id));
            }else if(request.url === '/location'  && queryData.id){
                locationService.deleteLocation(Number(queryData.id));
            }
            response.statusCode = 200;
            response.end();
        }
        else {
            response.statusCode = 404;
            response.end();
        }
    });
}).listen(8080); // Activates this server, listening on port 8080.


