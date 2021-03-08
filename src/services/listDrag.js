import { CardListElement } from "../components/CardList";
import { ElementDimensionsRecord } from "../helpers/ElementDimensionsRecord";
import { DragDirection } from "../helpers/Direction";
import { DropZoneManager } from "../helpers/DropZoneManager";

/**
 * an interface that handles actions related to drag events on CardList and ListDeck
 * set from the CardList on dragstart, reset occurs on draggend
 */
const listDrag = (function () {
  let list;
  let notDraggedLists;
  let horizontalDragDir;
  let verticalDragDir;
  let startDimensions;
  let dropZoneManager;

  const setList = (element) => {
    if (list !== undefined) {
      throw new Error("Illegal use of setList - list already set.");
    }

    return element;
  };

  return {
    init(
      element,
      horizontalStartCoordinate,
      verticalStartCoordinate,
      dropZone
    ) {
      list = setList(element);
      notDraggedLists = list.parentNode.querySelectorAll(
        CardListElement.dragNotActiveSelector
      );

      horizontalDragDir = new DragDirection(
        horizontalStartCoordinate,
        DragDirection.DIR_HORIZONTAL
      );
      verticalDragDir = new DragDirection(
        verticalStartCoordinate,
        DragDirection.DIR_VERTICAL
      );

      startDimensions = new ElementDimensionsRecord(list);
      dropZoneManager = new DropZoneManager(
        dropZone,
        horizontalDragDir,
        notDraggedLists
      );
    },

    getList() {
      return list;
    },

    calculateRightEdge() {
      const distanceTravelled = horizontalDragDir.distTravelled();
      return (
        startDimensions.right +
        (horizontalDragDir.isDirPositiveFromStart()
          ? distanceTravelled
          : distanceTravelled * -1)
      );
    },

    calculateLeftEdge() {
      const distanceTravelled = horizontalDragDir.distTravelled();
      return (
        startDimensions.left +
        (horizontalDragDir.isDirPositiveFromStart()
          ? distanceTravelled
          : distanceTravelled * -1)
      );
    },

    calculateTop() {
      const distanceTravelled = verticalDragDir.distTravelled();
      return (
        startDimensions.top +
        (verticalDragDir.isDirPositiveFromStart()
          ? distanceTravelled
          : distanceTravelled * -1)
      );
    },

    dragOverDeck(deck, curXPos, curYPos) {
      horizontalDragDir.setCurDir(curXPos);
      verticalDragDir.setCurDir(curYPos);

      const list = this.getList();
      const leftEdge = this.calculateLeftEdge();
      const top = this.calculateTop();
      const rightEdge = this.calculateRightEdge();
      const scrollDeckBy = rightEdge - this.getList().width;

      const xPosDropZone = horizontalDragDir.isDirPositive()
        ? rightEdge
        : leftEdge;
      dropZoneManager.insertDropZone(xPosDropZone);

      requestAnimationFrame(list?.move(leftEdge, top));
      deck.scroll({ left: scrollDeckBy });
    },

    resetState() {
      [
        list,
        notDraggedLists,
        horizontalDragDir,
        verticalDragDir,
        startDimensions,
        dropZoneManager,
      ] = [undefined];
    },
  };
})();

export { listDrag };
