import ClimateService from "../services/ClimateService.js";

import type { iResponse } from "../interfaces/interfaces.js";

export default class ClimateController {
  static async getClimateDetails(): Promise<iResponse> {
    return await ClimateService.getClimateDetails();
  }
}
