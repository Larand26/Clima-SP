import type { iResponse } from "../interfaces/interfaces.js";
import { config } from "../config/app.config.js";
import nodemailer from "nodemailer";

export default class EmailService {
  static async sendEmail(html: string): Promise<iResponse> {
    const transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: true,
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
    } as nodemailer.TransportOptions);

    const mailOptions = {
      from: config.email.user,
      to: config.email.to,
      subject: "Clima em São Paulo",
      html: html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        data: html,
        message: "Email enviado com sucesso",
      };
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return { success: false, data: null, message: "Erro ao enviar email" };
    }
  }
}
