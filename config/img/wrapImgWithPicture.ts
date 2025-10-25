import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

export async function wrapImgWithPicture() {
    const htmlDir = path.resolve(__dirname, "../../dist");

    let files;
    try {
        files = fs.readdirSync(htmlDir);
    } catch (err) {
        console.log("wrapImgWithPicture is not working. Error: ", err.message);
        return;
    }

    for (const file of files) {
        if (file.endsWith(".html")) {
            const filePath = path.join(htmlDir, file);
            const html = fs.readFileSync(filePath, "utf-8");
            const $ = cheerio.load(html);

            $("img").each((i, elem) => {
                const img = $(elem);
                const src = img.attr("src");

                if (!src) {
                    throw new Error(
                        `You need to set the SRC attribute to img: ${i}`
                    );
                }

                const webpSrc = `${src?.replace(
                    /\.(jpeg|jpg|png)$/i,
                    ".webp"
                )}`;
                const avifSrc = `${src?.replace(
                    /\.(jpeg|jpg|png)$/i,
                    ".avif"
                )}`;

                const pictureTag = `<picture>
                              <source srcset="${webpSrc}" type="image/webp">
                              <source srcset="${avifSrc}" type="image/avif">
                              ${img.prop("outerHTML")}
                            </picture>`;

                img.replaceWith(pictureTag);
            });

            fs.writeFileSync(filePath, $.html());
        }
    }
}
