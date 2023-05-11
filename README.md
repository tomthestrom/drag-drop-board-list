# Drag & Drop Trello Like Board in Vanilla JS with Custom Elements

UPDATE: May 11, 2023 - the code is no longer working - keeping the repo and the [video about the functionality](https://www.youtube.com/watch?v=uiPHqvgL2d4) up, there's probably been a change in the Drag&Drop API functionality. Someone commented on the vid ~2 months ago, they still found it helpful - stuff concerning the logic of how this works shouldn't have changed.

//Original text: 
I created this repo while creating a clone of Trello and made this code public, because so far I have not found a true 1:1 implementation of this feature as it is done by Trello.

This is my attempt at reverse engineering the functionality of dragging and dropping the list elements on Trello board using [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) as a way of getting familiar with [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

To run the project:
1. Download/clone this repo
2. Open the terminal in this project's directory and run ```npm install```.
3. Run ```npm run start```, a new browser tab should open at ```http://localhost:8080/```.

- [A youtube video about the functionality](https://www.youtube.com/watch?v=uiPHqvgL2d4)

Summary of the video:
1. The list (```CardList```) is being moved around with the cursor. There is a dark blue placeholder I call ```DropZone``` that gets inserted in the place the dragged list would go in case of drag end.
2. The most important methods are called in ```services/listDrag``` which is an ```IIFE``` that returns an ```object```. The object is used by ```CardList``` (the list element) and ```ListDeck``` (the lists container) 
3. On ```dragstart``` within the ```CardList``` element, the ```init``` method of ```listDrag``` is called.
4. On ```dragover``` within ```ListDeck```, the ```dragOver``` method of ```listDrag``` is called.
5. On ```dragend``` within ```CardList```, the ```resetState``` method of ```listDrag``` is called, thus the lifecycle of the helper objects created in ```init``` to help with the calculations to move around the ```ListCard``` element and the ```DropZone``` is controlled.

Finally, if you have any questions, remarks or suggestions, don't hesitate to contact me
