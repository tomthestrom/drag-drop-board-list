import { DropZoneFactory } from "../factories/DropZone";
import { listDrag } from "../services/listDrag";
import { emptyDragImage } from "../utils/drag";
import { numberWithPx } from "../utils/string";

/**
 * The list element
 */
class CardList extends HTMLElement {
  constructor() {
    super();
    this.dragActive = false;
  }

  set dragActive(isActive) {
    this.dataset.dragActive = Boolean(isActive);
  }

  set dropZone(dropZone) {
    this._dropZone = dropZone;
  }

  static get dragNotActiveSelector() {
    return "[data-draggable-list][data-drag-active=false]";
  }

  get dropZone() {
    return this._dropZone;
  }

  get dropZoneBgColor() {
    return getComputedStyle(document.documentElement).getPropertyValue(
      "--color-primary-blue--dark"
    );
  }

  get height() {
    return this.getBoundingClientRect().height;
  }

  get width() {
    return this.getBoundingClientRect().width;
  }

  get right() {
    return this.getBoundingClientRect().right;
  }

  get left() {
    return this.getBoundingClientRect().left;
  }

  get top() {
    return this.getBoundingClientRect().top;
  }

  applyDragStyling() {
    this.style.left = numberWithPx(this.left);
    this.style.top = numberWithPx(this.top);
    this.style.position = "fixed";
    this.style.zIndex = "1000";
    this.style.transform = "rotate(3deg)";
  }

  removeDragStyling() {
    this.style.left = "";
    this.style.top = "";
    this.style.position = "";
    this.style.zIndex = "";
    this.style.transform = "";
  }

  createDropZone() {
    return new DropZoneFactory(this).createDropZone();
  }

  insertDropZoneBeforeThis() {
    this.parentNode.insertBefore(this.dropZone, this);
  }

  dragStart(e) {
    this.dragActive = true;
    this.dropZone = this.createDropZone();
    this.applyDragStyling();
    this.insertDropZoneBeforeThis();
    listDrag.init(this, e.pageX, e.pageY, this.dropZone);
    e.dataTransfer.setDragImage(emptyDragImage, 0, 0);
  }

  dragEnd() {
    listDrag.resetState();
    this.dragActive = false;
    this.removeDragStyling();
    this.parentNode.replaceChild(this, this.dropZone);
    this.dropZone = undefined;
  }

  move(left, top) {
    this.style.left = numberWithPx(left);
    this.style.top = numberWithPx(top);
  }

  connectedCallback() {
    this.addEventListener("dragstart", this.dragStart);
    this.addEventListener("dragend", this.dragEnd);
  }
}

export { CardList as CardListElement };
