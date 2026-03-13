import { manifestRPTemplate } from "../../template/manifest/manifestRPTemplate";
import { randomUUID } from "crypto";

export function buildRPManifest(config: any) {
    return manifestRPTemplate({
        ...config, 
        headerUuid: randomUUID(),
        moduleUuid: randomUUID()
    });
}