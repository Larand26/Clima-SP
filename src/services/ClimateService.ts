import axios from "axios";

import { config } from "../config/app.config.js";

import type { iResponse } from "../interfaces/interfaces.js";

export default class ClimateService {
  static async getClimateDetails(): Promise<iResponse> {
    try {
      const response = await axios.get(config.apiClimate.url);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("Error fetching climate details:", error);
      return {
        success: false,
        data: null,
        error: error,
      };
    }
  }
}
