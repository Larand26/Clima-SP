import type { iClimateDetails } from "./interfaces/interfaces.js";

import ClimateController from "./controllers/ClimateController.js";
import HtmlController from "./controllers/HtmlController.js";

export default class App {
  static async start() {
    // Pega detalhes os climas da API
    const climateDetailsResponse = await ClimateController.getClimateDetails();
    console.log(climateDetailsResponse);
    // Constroi o HTML com os detalhes do clima
    const htmlResponse = await HtmlController.buildClimateDetailsHtml(
      climateDetailsResponse.data as iClimateDetails,
    );
    console.log(htmlResponse);
    // Envia o email
  }
}
