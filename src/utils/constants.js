// this is for production
// export const BASE_URL = "/api"


// this is for localhost 
// export const BASE_URL = "http://localhost:7777"

export const BASE_URL = location.hostname==="localhost"? "http://localhost:7777" : "/api"