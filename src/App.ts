import ClimateController from "./controllers/ClimateController.js";

export default class App {
  static async start() {
    // Pega detalhes os climas da API
    const climateDetails = await ClimateController.getClimateDetails();
    // Controe o HTML com os detalhes do clima
    // Envia o email
  }
}
