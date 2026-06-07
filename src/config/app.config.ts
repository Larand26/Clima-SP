import dotenv from "dotenv";

dotenv.config();

export const config = {
  app: {
    mode: process.env.APP_MODE || "production",
    cronShedule: process.env.CRON_SCHEDULE || "0 5 * * *", // Padrão: todos os dias às 5h da manhã
  },
  apiClimate: {
    url: process.env.URL_API_CLIMATE || "",
  },
  email: {
    host: process.env.EMAIL_HOST || "",
    port: process.env.EMAIL_PORT || 465,
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
    to: process.env.EMAIL_TO || "",
  },
};
