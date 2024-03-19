import fsp from "node:fs/promises";
import path from "node:path";

const filesinfo = async (dir) => {
  const dirpath = path.resolve(process.cwd(), dir);
  console.log(`Полный путь до каталога: ${dirpath}`);
  try {
    await fsp.access(dirpath);
  } catch (e) {
    console.log("Указанный каталог не существует.");
    return;
  }

  try {
    const files = await fsp.readdir(dirpath);

    for (const file of files) {
      const filepath = path.join(dirpath, file);
      const stat = await fsp.stat(filepath);
      if (stat.isDirectory()) {
        continue;
      }

      const day = String(stat.birthtime.getDate()).padStart(2, "0");
      const month = String(stat.birthtime.getMonth() + 1).padStart(2, "0");
      const year = stat.birthtime.getFullYear();

      const formattedDate = `${day}.${month}.${year}`;

      console.log(`${file} | ${stat.size} | ${formattedDate}`);
    }
  } catch (e) {
    console.log(e);
  }
};

const parameter = process.argv[2];
console.log(`Параметр командной строки: ${parameter}`);

if (!parameter) {
  console.log(
    `Требуемый каталог не передан в качестве параметра. Будем читать из каталога: ./testDir`
  );
  filesinfo("./testDir");
} else {
  filesinfo(parameter);
}
