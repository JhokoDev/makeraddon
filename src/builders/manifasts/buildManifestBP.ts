import { manifestTemplate } from "../../templates/manifests/manifestBP.js";
import { randomUUID } from "crypto";
import { ManifestConfig } from "../../types/manifest.js";

export function buildManifest(config: ManifestConfig) {

  return manifestTemplate({
    name: config.name,
    description: config.description,
    author: config.author,
    headerUuid: randomUUID(),
    moduleUuid: randomUUID()
  });

}