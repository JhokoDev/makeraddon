import { manifestTemplate } from "../../templates/manifests/manifestBP.js";
import { randomUUID } from "crypto";

export function buildManifest(config) {

  return manifestTemplate({
    name: config.name,
    description: config.description,
    author: config.author,
    headerUuid: randomUUID(),
    moduleUuid: randomUUID()
  });

}