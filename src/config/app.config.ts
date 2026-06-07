import dotenv from "dotenv";

dotenv.config();

export const config = {
  apiClimate: {
    url: process.env.URL_API_CLIMATE || "",
  },
};
