import * as vscode from 'vscode';
import RegisterCommandCreateProject from './commands/createProject';

export function activate(context: vscode.ExtensionContext) {

	RegisterCommandCreateProject(context);
}

export function deactivate() {}
