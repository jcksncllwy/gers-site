import { Type } from "typescript";

function utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
const apiHostname = process.env.REACT_APP_CVENT_API_HOSTNAME ?? '';
const apiVersion = process.env.REACT_APP_CVENT_API_VERSION ?? '';
const clientID = process.env.REACT_APP_CVENT_API_CLIENT_ID ?? '';
const clientSecret = process.env.REACT_APP_CVENT_API_CLIENT_SECRET ?? '';
const summitEventID = '44b4bb24-cda1-4c4f-a407-fa74f26d371c'

//TODO: NEED TO FIGURE OUT PATH APPENDING IN URLS
const tokenPath = 'oauth2/token';
const tokenURL = new URL(`${apiVersion}/${tokenPath}`, apiHostname)
const base64AuthString = utf8_to_b64(`${clientID}:${clientSecret}`)

const listEventsPath = 'events';
const listEventsURL = new URL(`${apiVersion}/${listEventsPath}`, apiHostname)
const getSummitEventURL = new URL(`${apiVersion}/${listEventsPath}/${summitEventID}`, apiHostname)

const attendeesPath = 'attendees';
const attendeesURL = new URL(`${apiVersion}/${attendeesPath}`, apiHostname)

type contactInfo = {
    [key: string]: any,
    email: string
}
const contactsPath = 'contacts'
const contactsURL = new URL(`${apiVersion}/${contactsPath}`, apiHostname)

export const cvent = {
    fetchToken: async () => {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${base64AuthString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${clientID}`
        });
        const payload = await response.json()
        return payload.access_token;
    },
    listEvents: async (token: string) => {
        const response = await fetch(listEventsURL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const payload = await response.json()
        return payload;
    },
    getSummitEvent: async (token: string) => {
        const response = await fetch(getSummitEventURL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const payload = await response.json()
        return payload;
    },
    addAttendeeToSummit: async (token: string, contactID: string, admissionItemID: string) => {
        const response = await fetch(attendeesURL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{
                status: "Accepted",
                event: { id: summitEventID },
                contact: { id: contactID },
                admissionItem: { id: admissionItemID }
            }])
        });
        const payload = await response.json()
        console.log(JSON.stringify(payload, null, 4));
        return payload;
    },
    createContact: async (token: string, contactInfo: contactInfo) => {
        const response = await fetch(contactsURL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([contactInfo])
        });
        const payload = await response.json()
        return payload[0].data;
    }

}

export const admissionItems = {
    free: {
        id: '996552ea-16db-404c-b6e6-94e2efe1cf60'
    },
    twentyFive: {
        id: '3898a6ee-5608-42dd-8744-f6b23dff3661'
    },
    fifty: {
        id: '3d1fb5e1-83d6-469d-abe8-7f3aa506c1aa'
    },
    oneHundred: {
        id: 'f1b60802-ba44-4708-bc5c-a3b7cbba2070'
    },
    custom: {
        id: '996552ea-16db-404c-b6e6-94e2efe1cf60'
    }
}



