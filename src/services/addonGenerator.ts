import * as fs from 'fs/promises';
import * as path from 'path';

export async function generateAddon(folderPath: string) {

    const BPPath = path.join(folderPath, 'test', 'test_BP');
    const RPPath = path.join(folderPath, 'test', 'test_RP');

    await fs.mkdir(BPPath, { recursive: true });
    await fs.mkdir(RPPath, { recursive: true });

}