import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const writePort = async () => {
  const filepath = path.resolve(__dirname, "../dist", "port.txt");
  process.env.PORT = process.env.PORT || 3000;
  const env_port = process.env.PORT;
  try {
    await fsp.writeFile(
      filepath,
      `enviroment variable PORT = ${env_port}`,
      "utf-8"
    );
  } catch (e) {
    console.log(e);
  }
};

writePort();

