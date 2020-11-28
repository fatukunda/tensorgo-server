import axios from "axios";

export const getApiUserData = async (page = 1) => {
  const response = await axios.get(
    `https://gorest.co.in/public-api/users?page=${page}`
  );
  const { data } = response;
  return data;
};
