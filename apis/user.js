import { axiosInstance } from "@/utils/axiosInstance";

export const createUser = async ({ username, email, password }) => {
  try {
    const res = await axiosInstance.post("/users", {
      username,
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  } 
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post("/login", {
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};