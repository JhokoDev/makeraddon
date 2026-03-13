import path from "path";
import fs from "fs/promises";
import * as vscode from "vscode"; // Adicione isso para mostrar a mensagem de erro

import { generateBPManifest } from "../manifest/generateBPManifest";
import { generateRPManifest } from "../manifest/generateRPManifest";

export async function generateAddon(root: string, config: any) {
  const addonPath = path.join(root, config.name);
  const BP = path.join(addonPath, "BP");
  const RP = path.join(addonPath, "RP");

  await fs.mkdir(BP, { recursive: true });
  await fs.mkdir(RP, { recursive: true });

  try {
    // Vamos tentar gerar o BP e capturar se der erro
    await generateBPManifest(BP, config);
  } catch (error: any) {
    vscode.window.showErrorMessage(`Erro ao gerar BP Manifest: ${error.message}`);
    console.error(error);
  }

  try {
    await generateRPManifest(RP, config);
  } catch (error: any) {
    vscode.window.showErrorMessage(`Erro ao gerar RP Manifest: ${error.message}`);
    console.error(error);
  }
}