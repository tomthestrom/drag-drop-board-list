import { CardListElement } from "./components/CardList";
import { DropZoneElement } from "./components/DropZone";
import { ListDeckElement } from "./components/ListDeck";

customElements.define("card-list", CardListElement);
customElements.define("list-deck", ListDeckElement, { extends: "div" });
customElements.define("drop-zone", DropZoneElement, { extends: "div" });
