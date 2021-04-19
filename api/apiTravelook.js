import Request from "./middleware/request";

const apiTravelook = {
  callTravelookAPI(method, pathUrl, body, headers = {}) {
    console.log('API_TRAVELOOK_PUBLIC_KEY', process.env.API_TRAVELOOK_SECURITY)
    return Request.callAPI(
      method,
      process.env.API_TRAVELOOK_URL,
      pathUrl,
      body,
      headers,
      process.env.API_TRAVELOOK_SECURITY === "TRUE"
    );
  },
};
export default apiTravelook;
