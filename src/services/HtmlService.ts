import type { iClimateDetails, iResponse } from "../interfaces/interfaces.js";

export default class HtmlService {
  static async buildClimateDetailsHtml(
    climateDetails: iClimateDetails,
  ): Promise<iResponse> {
    const data = climateDetails.results;
    try {
      const html = `
          <h1>Detalhes do Clima</h1>
          <p><strong>Temperatura:</strong> ${data.temp}°C</p>
          <p><strong>Umidade:</strong> ${data.humidity}%</p>
          <p><strong>Vento:</strong> ${data.wind_speedy} km/h</p>
          <p><strong>Descrição:</strong> ${data.description}</p>
        `;
      return {
        success: true,
        message: "HTML dos detalhes do clima construído com sucesso.",
        data: html,
      };
    } catch (error) {
      return {
        success: false,
        data: "Erro ao construir o HTML dos detalhes do clima.",
        error: error instanceof Error ? error.message : error,
      };
    }
  }
}
