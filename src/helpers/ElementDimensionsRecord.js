/**
 * Stores elements' properties relative to the page at the moment of creation 
 */
class ElementDimensionsRecord {
  constructor(element) {
    this.element = element;
    this.box = element.getBoundingClientRect();
  }

  get right() {
    return this.box.right + window.scrollX;
  }

  get left() {
    return this.box.left + window.scrollX;
  }

  get top() {
    return this.box.top + window.scrollY;
  }
}

export { ElementDimensionsRecord };
