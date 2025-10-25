import Inspect from "vite-plugin-inspect";
import PluginChecker from "vite-plugin-checker";
import handlebars from "vite-plugin-handlebars";
import { svgSpritemap } from "vite-plugin-svg-spritemap";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";
import { optimizeImages } from "./config/img/imageOptimizer";
import { fontPlugIn } from "./config/fonts/font-plugin";
import { wrapImgWithPicture } from "./config/img/wrapImgWithPicture";
import { DEFAULT_OPTIONS } from "./config/img/imageOptimizerConfig";
import path from "path";

export default {
    plugins: [
        fontPlugIn(
            path.resolve(__dirname, "src", "assets", "fonts"),
            path.resolve(
                __dirname,
                "src",
                "assets",
                "scss",
                "utils",
                "_fonts.scss"
            )
        ),

        svgSpritemap({
            pattern: "src/assets/sprites/*.svg",
        }),

        ViteImageOptimizer(DEFAULT_OPTIONS),

        viteCompression({
            algorithm: "brotliCompress",
        }),

        Inspect(),

        PluginChecker({
            typescript: true,
        }),

        handlebars({
            reloadOnPartialChange: true,
            partialDirectory: path.resolve(__dirname, "src/html/modules"),
        }),

        cssnano({
            preset: "default",
        }),

        {
            name: "optimize-images-and-wrap",
            closeBundle: async () => {
                await optimizeImages(
                    path.resolve(__dirname, "dist/assets/img")
                );
                await wrapImgWithPicture();
            },
            enforce: "post",
        },
    ],

    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/assets"),
        },
    },

    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                about: path.resolve(__dirname, "About.html"),
            },
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },

                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split(".").at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = "img";
                        return `assets/${extType}/[name][extname]`;
                    }
                    if (/woff2?|otf|ttf|eot/i.test(extType)) {
                        extType = "fonts";
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },

                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
            },
        },
    },

    base: "./",
};
