import path from "path";
import fs from "fs/promises";
import * as vscode from "vscode"; // Adicione isso para mostrar a mensagem de erro

import { generateBPManifest } from "../manifest/generateBPManifest";
import { generateRPManifest } from "../manifest/generateRPManifest";
import { copyFile } from "../../writers/writeJson";

export async function generateAddon(root: string, config: any, extensionPath: string) {
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

  const iconSource = path.join(extensionPath, "assets", "default_icon.png");
  const bpIconDest =  path.join(BP, "pack_icon.png");
  const rpIconDest =  path.join(RP, "pack_icon.png");

  await copyFile(iconSource, bpIconDest);
  await copyFile(iconSource, rpIconDest);
}