import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const ReadPort = async () => {
  const filepath = path.resolve(__dirname, "../dist", "port.txt");
  try {
    const data = await fsp.readFile(filepath, "utf-8");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

ReadPort();
