import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function optimizeImages(imgPath: string) {
    const imageDir = imgPath;

    let files;

    try {
        files = fs.readdirSync(imageDir);
    } catch (err) {
        console.log("optimizeImages is not working. Error: ", err.message);
        return;
    }

    for (const file of files) {
        if (/\.(jpe?g|png)$/i.test(file)) {
            const inputFilePath = path.join(imageDir, file);
            const outputFilePathWebP = path.join(
                imageDir,
                `${path.basename(file, path.extname(file))}.webp`
            );
            const outputFilePathAVIF = path.join(
                imageDir,
                `${path.basename(file, path.extname(file))}.avif`
            );

            // Конвертация в WebP
            await sharp(inputFilePath)
                .webp({ quality: 65 })
                .toFile(outputFilePathWebP);

            // Конвертация в AVIF
            await sharp(inputFilePath)
                .avif({ quality: 65 })
                .toFile(outputFilePathAVIF);
        }
    }
}

// optimizeImages();
