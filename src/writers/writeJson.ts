import fs from "fs/promises";

export async function writeJson(path: string, data: unknown) {

  const json = JSON.stringify(data, null, 2);

  await fs.writeFile(path, json, "utf8");

}

export async function copyFile(sourcePath: string, destPath: string) {
  try {
    await fs.copyFile(sourcePath, destPath);
  } catch (error) {
    console.error(`Erro ao copiar arquivo de ${sourcePath} para ${destPath}`, error);
    throw error;
  }
}