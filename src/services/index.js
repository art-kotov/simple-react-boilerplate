import apisauce from "apisauce";

const baseURL = process.env.BASE_URL;
const apiConfig = apisauce.create({
  baseURL
});

export const api = {
  users: {
    fetch() {
      return apiConfig.get("/users");
    }
  }
};
