// In your server or configuration file
const LOCAL_SERVER_URL = process.env.LOCAL_SERVER_URL
const LIVE_SERVER_URL = process.env.LIVE_SERVER_URL
    console.log('hi')
//const SERVER_URL =  "http://localhost:4100/api/v1"   // Production URL

const SERVER_URL = "http://localhost:5000/api/v1";

console.log("Server URL:", SERVER_URL); // For debugging purposes

export default SERVER_URL;
