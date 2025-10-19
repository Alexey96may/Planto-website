export class Modals {
    #moreInfoLinks = document.querySelectorAll(".moreInfo");
    #modalLeisures = document.querySelectorAll(".modal-leisure");
    #body = document.querySelector("body");

    constructor() {
        for (let i = 0; i < this.#moreInfoLinks.length; i++) {
            let moreInfoLink = this.#moreInfoLinks[i];
            let modalLeisure = this.#modalLeisures[i];
            let modalButton = document.querySelectorAll(".modal-button")[i];

            moreInfoLink?.addEventListener("click", (event) => {
                event.stopPropagation();
                event.preventDefault();
                modalLeisure?.classList.toggle("modal_appear");
                this.classesToggle();
            });

            modalButton?.addEventListener("click", (event) => {
                event.stopPropagation();
                modalLeisure?.classList.toggle("modal_appear");
                this.classesToggle();
            });
        }
    }

    classesToggle(): void {
        this.#body?.classList.toggle("body__fixed");
    }
}
