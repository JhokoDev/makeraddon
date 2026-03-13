import * as vscode from "vscode";
import { createAddon } from "../services/addonService";


export function registerCreateAddon(context: vscode.ExtensionContext) {

  const command = vscode.commands.registerCommand(
    "makeraddon.createAddon",
    async () => {

      const name = await vscode.window.showInputBox({
        prompt: "Addon name"
      });

      if (!name) {
        return
      };

      await createAddon(name);

    }
  );

  context.subscriptions.push(command);

}