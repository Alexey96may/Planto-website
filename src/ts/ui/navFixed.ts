export class NavFix {
    headerElement = document.getElementById("header");
    navHeight: number;
    navHeightMult = 4;
    userPosition = 0;

    constructor() {
        if (this.headerElement) {
            this.navHeight = this.headerElement.clientHeight;
        } else {
            throw new Error('It Needs an element with id = "header"');
        }

        document.addEventListener("scroll", () => {
            this.userPosition = window.pageYOffset;
            if (this.isNeedsFixing()) {
                this.fixNavigation();
            }
        });
    }

    isNeedsFixing(): boolean {
        if (this.navHeight * this.navHeightMult <= this.userPosition) {
            return true;
        }
        return false;
    }

    fixNavigation(): void {
        setTimeout(() => {
            if (this.headerElement) {
                this.headerElement.style.top = "0";
            }
        }, 1000);
        this.headerElement?.classList.add("header--fixed");
    }
}
