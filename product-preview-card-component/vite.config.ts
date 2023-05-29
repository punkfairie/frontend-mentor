import * as fs from 'fs';
import { homedir } from 'os';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: detectServerConfig('frontend-mentor.test'),
});

function detectServerConfig(host: string) {
  const keyPath         = resolve(homedir(), `.config/valet/Certificates/${host}.key`);
  const certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`);

  if (!fs.existsSync(keyPath)) {
    return {};
  }

  if (!fs.existsSync(certificatePath)) {
    return {};
  }

  return {
    host:  host,
    hmr:   {
      host: host,
    },
    https: {
      key:  fs.readFileSync(keyPath),
      cert: fs.readFileSync(certificatePath),
    },
  };
}
