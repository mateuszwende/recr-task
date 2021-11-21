import axios from "axios";

export const UsersApi = {
  fetch: () => axios.get(`https://jsonplaceholder.typicode.com/users`),
};
