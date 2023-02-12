import Axios from "axios";
// import { TicketInfo } from "../core/models/BookTicketsInfo";
import { TOKEN_CYBER, API_TOKEN, DOMAIN_CYBER } from "../constants/baseSettings/settings";
// import { TOKEN_CYBER, API_TOKEN, DOMAIN_CYBER } from "../ulti/constants/Settings";
import { BaseService } from "./BaseServices";

export class TicketsServices extends BaseService {
    constructor() {
        super()
        this.post = (url, model) => {
            return Axios({
                url: `${DOMAIN_CYBER}/${url}`,
                method: 'POST',
                data: model,
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN_CYBER)),
                    'TokenCybersoft': API_TOKEN
                }
            })
        }
    }

    getTicketCinema = (id) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
    }

    postTicketMovie = (ticketInfo) => {
        return this.post(`api/QuanLyDatVe/DatVe`, ticketInfo)
    }
}

export const ticketsServices = new TicketsServices()