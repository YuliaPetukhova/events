import {ITicket} from "./ITicket";

export interface ITicketGroup {
    name: string;
    tickets: ITicket[];
}