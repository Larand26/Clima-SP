import type { iResponse } from "../interfaces/interfaces.js";

export default class EmailService {
  static async sendEmail(html: string): Promise<iResponse> {
    // Lógica para enviar email
    return { success: true, data: html, message: "Email enviado com sucesso" };
  }
}
