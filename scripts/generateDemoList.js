// Updated to ESM syntax
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the current file URL to a directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const demosDirectory = path.join(__dirname, '..', 'pages', 'demos');
const outputFilePath = path.join(__dirname, '..', 'assets', 'demoList.json');

try {
  const files = await fs.readdir(demosDirectory);
  const demoList = files
    .filter(file => file.endsWith('.vue'))
    .map(file => file.replace('.vue', ''));

  await fs.writeFile(outputFilePath, JSON.stringify(demoList));
  console.log('Demo list generated successfully.');
} catch (err) {
  console.error('Could not process the demo list.', err);
}
