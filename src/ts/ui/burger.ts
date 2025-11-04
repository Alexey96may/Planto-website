export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("nav");
    #navItems = document.querySelectorAll(".nav__item");
    #body = document.querySelector("body");
    #isMenuOpen = false;

    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.classesToggle();
            this.toggleMenu();
        });

        this.#body?.addEventListener("click", (event) => {
            event.stopPropagation();
            if (
                (event.target as HTMLElement).closest("header") &&
                this.#isMenuOpen &&
                (event.target as HTMLElement).tagName?.toLowerCase() === "a"
            ) {
                this.toggleMenu();
                this.classesToggle();
            }
        });
    }

    classesToggle(): void {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#body?.classList.toggle("body__fixed");

        if (this.#isMenuOpen) {
            setTimeout(() => {
                this.#headerNav?.classList.toggle("nav--appear");
            }, (this.#navItems.length + 1) * 250);
        } else {
            this.#headerNav?.classList.toggle("nav--appear");
        }

        for (let i = 0; i < this.#navItems.length; i++) {
            const navItem = this.#navItems[i];
            const count = this.#isMenuOpen ? this.#navItems.length - i : i;

            setTimeout(() => {
                navItem.classList.toggle("nav-item--appear");
            }, count * 250);
        }
    }

    toggleMenu(): void {
        if (this.#isMenuOpen) {
            this.#isMenuOpen = false;
        } else {
            this.#isMenuOpen = true;
        }
    }
}
