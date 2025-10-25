export const DEFAULT_OPTIONS = {
    test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    exclude: undefined,
    include: undefined,
    includePublic: true,
    logStats: true,
    ansiColors: true,
    svg: {
        multipass: true,
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        cleanupNumericValues: false,
                    },
                    cleanupIDs: {
                        minify: false,
                        remove: false,
                    },
                    convertPathData: false,
                },
            },
            "sortAttrs",
            {
                name: "addAttributesToSVGElement",
                params: {
                    attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                },
            },
        ],
    },
    png: {
        quality: 75,
    },
    jpeg: {
        quality: 75,
    },
    jpg: {
        quality: 75,
    },
    tiff: {
        quality: 75,
    },
    gif: {},
    webp: {
        quality: 45,
    },
    avif: {
        quality: 45,
    },
    cache: false,
    cacheLocation: undefined,
};
