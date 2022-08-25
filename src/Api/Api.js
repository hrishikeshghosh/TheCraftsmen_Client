import axios from "axios";

const Api = axios.create({
  baseURL: "http://3.108.217.145:8000/api/v1",
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
export const call_signup = async (data) =>
  await Api.post("/users/signup", data);

export const call_signin = async (data) => await Api.post("/users/login", data);
export const call_signOut = async () => await Api.post("/users/logout");
export const call_currentUser = async () => await Api.get("/users/me");
