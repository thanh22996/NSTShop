import Request from "../middleware/request";

const callAPI = {
  getDataRequest({ ...arg }) {
    return callAPI.callTravelookAPI("GET", "/Demo", { ...arg });
  },

  callTravelookAPI(method, pathUrl, body={}, headers = {}) {
    return Request.callAPI(
      method,
      process.env.API_TRAVELOOK_URL,
      pathUrl,
      body,
      headers
    );
  },
};
export default callAPI;
