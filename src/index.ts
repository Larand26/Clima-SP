import App from "./App.js";
import { config } from "./config/app.config.js";
import nodeCron from "node-cron";

const main = () => {
  App.start();
};

nodeCron.schedule(config.app.cronShedule, () => {
  console.log("Executando tarefa agendada...");
  main();
});

if (config.app.mode === "development") {
  main();
}
