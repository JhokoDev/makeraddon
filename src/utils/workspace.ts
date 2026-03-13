import * as vscode from 'vscode';

export function getWorkspaceFolder(): string | undefined {

    const folders = vscode.workspace.workspaceFolders;

    if (!folders) {

        vscode.window.showErrorMessage(
            'Abra uma pasta no VS Code primeiro'
        );

        return;

    }

    return folders[0].uri.fsPath;

}