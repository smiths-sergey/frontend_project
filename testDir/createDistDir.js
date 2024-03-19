import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const createDir = async () => {
  const dirpath = path.resolve(__dirname, "../dist");
  try {
    await fsp.mkdir(dirpath);
  } catch (e) {
    console.log(e);
  }
};

createDir();
