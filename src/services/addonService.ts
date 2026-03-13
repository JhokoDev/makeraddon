import * as vscode from "vscode";
import { getWorkspaceFolder } from "../utils/workspace";
import { generateAddon } from "../generators/addon/generateAddon";

export async function createAddon(name: string, extensionPath: string) {

  const folder = getWorkspaceFolder();

  // Melhoria: Avisa o usuário por que não gerou
  if (!folder) {
    vscode.window.showErrorMessage("MakerAddon: Por favor, abra uma pasta (workspace) primeiro para criar o addon.");
    return;
  }

  // Se tem pasta, gera normalmente!
  await generateAddon(folder, {
    name,
    description: "Generated addon",
    author: "MakerAddon"
  },
  extensionPath);

  // Opcional: Avisar que deu tudo certo no final
  vscode.window.showInformationMessage(`Addon "${name}" criado com sucesso!`);
}