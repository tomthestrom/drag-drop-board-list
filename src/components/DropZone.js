import { numberWithPx } from "../utils/string";
/**
 * Used for the placeholder when dragging
 */
class DropZone extends HTMLDivElement {
  constructor(height, minWidth, bgColor) {
    super();
    this.height = height;
    this.minWidth = minWidth;
    this.bgColor = bgColor;
  }

  set height(height) {
    this.style.height = numberWithPx(height);
  }

  set minWidth(width) {
    this.style.minWidth = numberWithPx(width);
  }

  set bgColor(bgColor) {
    this.style.backgroundColor = bgColor;
  }

  set next(next) {
    this.dataset.next = next;
  }

  set prev(prev) {
    this.dataset.prev = prev;
  }

  get next() {
    return this.dataset.next;
  }

  get prev() {
    return this.dataset.prev;
  }
}

export { DropZone as DropZoneElement };
