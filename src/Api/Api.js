import axios from "axios";

const Api = axios.create({
  baseURL: "http://13.232.137.88:4000",
});

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("C-tid")) {
    req.headers.authorization = `Bearer ${JSON.parse(
      localStorage.getItem("C-tid")
    )}`;
  }
  return req;
});

//Tours
export const call_getTours = async () => await Api.get("/tours");
export const call_getSingleTour = async (id) => await Api.get(`/tours/${id}`);
export const call_BookTour = async (id, data) =>
  await Api.post(`/tours/${id}/bookings`, data);

//Users
export const call_signup = async (data) => await Api.post("/user/signup", data);

export const call_signin = async (data) => await Api.post("/user/login", data);
export const call_signOut = async () => await Api.post("/user/logout");
export const call_currentUser = async () => await Api.get("/user/me");
