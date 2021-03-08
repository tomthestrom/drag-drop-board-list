import { DropZoneElement } from "../components/DropZone";
/**
 * creates a dropzone element (placeholder), for the dragged element that is provided as a blueprint
 */
class DropZone {
  constructor(element) {
    this.bluePrint = element;
  }

  createDropZone() {
    return new DropZoneElement(
      this.bluePrint.height,
      this.bluePrint.width,
      this.bluePrint.dropZoneBgColor
    );
  }
}

export { DropZone as DropZoneFactory };
