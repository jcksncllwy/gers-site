
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
        console.log(JSON.stringify(payload, null, 4));
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
        console.log(JSON.stringify(payload, null, 4));
        return payload;
    }
    
}
