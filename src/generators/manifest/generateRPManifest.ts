import path from "path";
import { buildRPManifest } from "../../builders/manifest/buildRPManifest";
import { writeJson } from "../../writers/writeJson";

export async function generateRPManifest(rpPath: string, config: any) {
  
  // 1. O Builder é chamado para montar a estrutura final do JSON (injetando UUIDs, etc.)
  const manifestData = buildRPManifest(config);

  // 2. Definimos o caminho exato onde o arquivo será salvo
  const filePath = path.join(rpPath, "manifest.json");

  // 3. O Writer recebe a ordem para gravar o JSON no disco
  await writeJson(filePath, manifestData);

}