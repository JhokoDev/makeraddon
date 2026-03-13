const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

function run(cmd) {
    try {
        console.log(`\n> ${cmd}`);
        execSync(cmd, { stdio: "inherit" });
    } catch (err) {
        console.error(`Erro ao executar: ${cmd}`);
    }
}

function removeIfExists(target) {
    if (fs.existsSync(target)) {
        console.log(`Removendo ${target}`);
        fs.rmSync(target, { recursive: true, force: true });
    }
}

console.log("=== Reparando extensão do VS Code ===");

// limpar dependências
removeIfExists("node_modules");
removeIfExists("package-lock.json");

// instalar dependências
run("npm install");

// atualizar dependências principais
run("npm install vscode@latest --save-dev");

// compilar
run("npm run compile");

// verificar build
const distFile = path.join("dist", "extension.js");

if (fs.existsSync(distFile)) {
    console.log("\nBuild concluído com sucesso.");
} else {
    console.log("\nAviso: dist/extension.js não foi encontrado.");
    console.log("Verifique tsconfig.json ou script compile.");
}

console.log("\nProcesso finalizado.");