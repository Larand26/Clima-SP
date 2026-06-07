import type { iResponse } from "../interfaces/interfaces.js";

import EmailService from "../services/EmailService.js";

export default class EmailController {
  static async sendEmail(html: string): Promise<iResponse> {
    return await EmailService.sendEmail(html);
  }
}
