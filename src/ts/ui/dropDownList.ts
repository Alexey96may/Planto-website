export class DropDownList {
    element: HTMLElement;
    elemHeight: number;
    isListOpen = false;
    moreArrow = document.getElementById("moreArrow") || null;

    constructor(elem: HTMLElement) {
        this.element = elem;
        this.elemHeight = this.realElemHeight(this.element);

        this.element.addEventListener("click", () => {
            this.element.classList.toggle("nav__list--active");
            this.moreArrow?.classList.toggle("nav__plus-active");

            if (this.isListOpen) {
                this.isListOpen = false;
                this.element.style.height = "27px";
            } else {
                this.isListOpen = true;
                this.element.style.height = this.elemHeight + "px";
            }
        });
    }

    realElemHeight(node: HTMLElement): number {
        const elemClone = node.cloneNode(true) as HTMLElement;

        elemClone.style.maxHeight = "unset";
        elemClone.style.height = "auto";
        elemClone.style.position = "absolute";
        elemClone.style.top = "-999px";
        elemClone.style.left = "0";

        document.querySelector("body")?.prepend(elemClone);

        const height = elemClone.clientHeight;

        elemClone.remove();
        return height;
    }
}
