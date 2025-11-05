export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("nav");
    #navItems = document.querySelectorAll(".nav__item");
    #body = document.querySelector("body");
    #isMenuOpen = false;
    #isAnimStop = true;

    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            if (this.#isAnimStop) {
                event.stopPropagation();
                this.classesToggle();
                this.toggleMenu();
            }
        });

        this.#body?.addEventListener("click", (event) => {
            event.stopPropagation();
            const eventEl = event.target as HTMLElement;

            if (
                this.#isMenuOpen &&
                eventEl.parentElement?.tagName?.toLowerCase() === "a"
            ) {
                this.toggleMenu();
                this.classesToggle();
            }
        });
    }

    classesToggle(): void {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#body?.classList.toggle("body__fixed");
        this.#isAnimStop = false;

        if (this.#isMenuOpen) {
            setTimeout(() => {
                this.#headerNav?.classList.toggle("nav--appear");
                this.#isAnimStop = true;
            }, (this.#navItems.length + 1) * 250);
        } else {
            this.#headerNav?.classList.toggle("nav--appear");
            this.#isAnimStop = true;
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
