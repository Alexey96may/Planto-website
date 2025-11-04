import * as flsFunctions from "./ts/functions/functions";
import "./assets/scss/main.scss";
import { Burger } from "./ts/ui/burger";
import { DropDownList } from "./ts/ui/dropDownList";

flsFunctions.isWebp();
flsFunctions.isAvif();

new Burger();

const allNavOpenLists = document.querySelectorAll(".nav__item--plus") || [];

for (let i = 0; i < allNavOpenLists.length; i++) {
    new DropDownList(allNavOpenLists[i] as HTMLElement);
}
