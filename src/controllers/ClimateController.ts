import ClimateService from "../services/ClimateService.js";

export default class ClimateController {
  static async getClimateDetails() {
    return await ClimateService.getClimateDetails();
  }
}
