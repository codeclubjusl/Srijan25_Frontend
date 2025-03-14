import axios from "axios";
import { CONST } from "../../../config";

export const getUserById = (id, providerId = null) => {
  if (!id || typeof id !== "string") {
    throw new Error("id must be a valid string");
  }

  return axios.get(`${CONST.uri.resources.USERS}/${id}`, {
    params: providerId ? { providerId } : {},
    withCredentials: true,
  });
};

export const editUser = (data) => {
  if (!data.name) {
    throw "Enter a valid name";
  }
  if (!data.phone) {
    throw "Enter a valid phone";
  }

  return axios.put(CONST.uri.resources.EDIT_USERS, data, {  
    withCredentials: true, 
  });
};
