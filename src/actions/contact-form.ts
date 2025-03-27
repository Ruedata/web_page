"use server"

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  jobTitle?: string;      // Opcional, si deseas incluirlo en la hoja
  companySize?: string;   // Opcional, si deseas incluirlo en la hoja
  message: string;
};

export async function submitContactForm(formData: ContactFormData) {
  // Desestructurar variables de entorno

  const {
    GOOGLE_SHEETS_PRIVATE_KEY,
    GOOGLE_SHEETS_CLIENT_EMAIL,
    GOOGLE_SHEETS_SPREADSHEET_ID,
  } = process.env;


  if (!GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_SPREADSHEET_ID) {
    console.error("Faltan variables de entorno para Google Sheets");
    return { success: false, error: "Error de configuración del servidor" };
  }

  // Reemplazar los saltos de línea escapados en la clave privada
  const privateKey = GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n");

  // Configurar la autenticación con JWT
  const serviceAccountAuth = new JWT({
    email: GOOGLE_SHEETS_CLIENT_EMAIL,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  try {
    // Inicializar el documento y cargar la información
    const doc = new GoogleSpreadsheet(GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    console.log("Conectado a Google Sheets:", doc.title);

    // Obtener la primera hoja (puedes seleccionar por índice o título)
    const sheet = doc.sheetsByIndex[0];

    // Construir el objeto con la nueva fila a agregar
    const newRow: {
      Fecha: string;
      Nombre: string;
      Apellido: string;
      Email: string;
      Empresa: string;
      Teléfono: string;
      Mensaje: string;
    } = {
      Fecha: new Date().toISOString(),
      Nombre: formData.firstName,
      Apellido: formData.lastName,
      Email: formData.email,
      Empresa: formData.company,
      Teléfono: formData.phone,
      Mensaje: formData.message,
    };

    // Si deseas incluir 'jobTitle' y 'companySize', descomenta las siguientes líneas:
    // newRow["Cargo"] = formData.jobTitle;
    // newRow["Tamaño de la empresa"] = formData.companySize;

    // Añadir la nueva fila al documento
    await sheet.addRow(newRow);

    return { success: true };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error al enviar a Google Sheets:", error);
    return {
      success: false,
      error: "Error al guardar los datos. Por favor, inténtalo de nuevo.",
    };
  }
}
