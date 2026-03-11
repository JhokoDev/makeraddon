import * as vscode from 'vscode';
import { getWorkspaceFolder } from '../utils/workspace';
import { generateAddon } from '../services/addonGenerator';

export default function registerCreateProjectCommand(context: vscode.ExtensionContext) {

    const command = vscode.commands.registerCommand(
        'addon.createProject',
        async () => {

            const folder = getWorkspaceFolder();

            if (!folder) {
                return;
            }

            try {

                await generateAddon(folder);

                vscode.window.showInformationMessage("Addon gerado com sucesso");

            } catch (error) {

                vscode.window.showErrorMessage("Erro ao gerar addon");

            }

        }
    );

    context.subscriptions.push(command);
}