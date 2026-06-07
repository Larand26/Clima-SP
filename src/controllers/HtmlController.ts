import type { iResponse, iClimateDetails } from "../interfaces/interfaces.js";

import HtmlService from "../services/HtmlService.js";

export default class HtmlController {
  static async buildClimateDetailsHtml(
    climateDetails: iClimateDetails,
  ): Promise<iResponse> {
    return await HtmlService.buildClimateDetailsHtml(climateDetails);
  }
}
