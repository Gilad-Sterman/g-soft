import axios from "axios";
import { httpService } from "./http.service";

export const contactService = {
    sendInfo,
}

const STORAGE_KEY = 'client'

async function sendInfo(clientInfo) {
    try {
        const res = await httpService.post(`${STORAGE_KEY}/`, { clientInfo })
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}