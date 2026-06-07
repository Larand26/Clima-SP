import type { iClimateDetails } from "./interfaces/interfaces.js";

import ClimateController from "./controllers/ClimateController.js";
import HtmlController from "./controllers/HtmlController.js";
import EmailController from "./controllers/EmailController.js";

import { logger } from "./utils/logger.js";

export default class App {
  static async start() {
    // Pega detalhes os climas da API
    const climateDetailsResponse = await ClimateController.getClimateDetails();
    if (!climateDetailsResponse.success) {
      logger.error(
        `Erro ao obter detalhes do clima: ${climateDetailsResponse.message}`,
      );
      return;
    }
    logger.success("Detalhes do clima obtidos com sucesso.");
    // Constroi o HTML com os detalhes do clima
    const htmlResponse = await HtmlController.buildClimateDetailsHtml(
      climateDetailsResponse.data as iClimateDetails,
    );
    if (!htmlResponse.success) {
      logger.error(`Erro ao construir HTML: ${htmlResponse.message}`);
      return;
    }
    logger.success("HTML construído com sucesso.");
    // Envia o email
    const emailResponse = await EmailController.sendEmail(
      htmlResponse.data as string,
    );
    if (!emailResponse.success) {
      logger.error(`Erro ao enviar email: ${emailResponse.message}`);
      return;
    }
    logger.success("Email enviado com sucesso.");
  }
}
