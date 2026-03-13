import * as vscode from 'vscode';
import { registerCreateAddon } from './commands/createAddon';


export function activate(context: vscode.ExtensionContext) {

	registerCreateAddon(context);
}

export function deactivate() {}
