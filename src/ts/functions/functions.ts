export function isWebp() {
    function testWebp(cb: Function) {
        const webp = new Image();
        webp.onload = webp.onerror = function () {
            cb(webp.height == 2);
        };
        webp.src =
            "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw" +
            "AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
    }

    testWebp(function (support: boolean) {
        const className = support === true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}

export function isAvif() {
    function testAvif(cb: Function) {
        const avif = new Image();
        avif.onload = avif.onerror = function () {
            cb(avif.height == 2);
        };
        avif.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    }

    testAvif(function (support: boolean) {
        const className = support === true ? "avif" : "no-avif";
        document.documentElement.classList.add(className);
    });
}
