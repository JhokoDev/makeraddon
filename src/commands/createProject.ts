import * as vscode from 'vscode';
import * as fs from 'fs/promises';
import * as path from 'path';


export default  function RegisterCommandCreateProject(contex:vscode.ExtensionContext) {
    const openFolders = vscode.workspace.workspaceFolders;

    const command = vscode.commands.registerCommand('makeraddon.createProject', async () => {

        if (!openFolders) {
        vscode.window.showErrorMessage('Por favor, abra uma pasta no VS Code primeiro');
        return;
    }

    try {
        const folderPath = openFolders[0].uri.fsPath;

        const BPPath = path.join(folderPath, 'test','test_BP');
        const RPPath = path.join(folderPath, 'test','test_RP');
        
        // Criar pastas
        await fs.mkdir(BPPath, {recursive: true});
        await fs.mkdir(RPPath, {recursive: true});
        

      

        
    } catch (error) {
        vscode.window.showErrorMessage("Erro ao criar o test_BP e/ou test_RP");
    }

    vscode.window.showInformationMessage("Addon Gerado com sucesso");
    });

    contex.subscriptions.push(command);
}


