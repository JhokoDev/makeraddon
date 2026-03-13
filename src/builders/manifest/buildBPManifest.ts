import { manifestBPTemplate } from "../../template/manifest/manifestBPTemplate";
import { randomUUID } from "crypto";

export function buildBPManifest(config: any) {
    return manifestBPTemplate({
        ...config, 
        headerUuid: randomUUID(),
        moduleUuid: randomUUID()
    });
}