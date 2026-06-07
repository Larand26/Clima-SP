import App from "./App.js";
import { config } from "./config/app.config.js";
import nodeCron from "node-cron";
import { logger } from "./utils/logger.js";

const main = () => {
  App.start();
};

nodeCron.schedule(config.app.cronShedule, () => {
  logger.info("Executando tarefa agendada...");
  main();
});

if (config.app.mode === "development") {
  main();
}
