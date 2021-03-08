# Drag & Drop Trello Like Board in Vanilla JS with Custom Elements

I created this repo while creating a clone of Trello and made this code public, because so far I have not found a true 1:1 implementation of this feature as it is done by Trello.

This is my attempt at reverse engineering the functionality of dragging and dropping the list elements on Trello board using [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) as a way of getting familiar with [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

The styling of the elements and the whole structure of the HTML document is made for illustratory purposes, my true focus lied in implementing the functionality with vanilla javascript only. The only exception is made by using the [throttle function by Lodash](https://lodash.com/docs/4.17.15#throttle) to throttle drag events.

To run the project:
1. Download/clone this repo
2. Open the terminal in this project's directory and run ```npm install```.
3. Finally, run ```npm run start```, a new browser tab should open at ```http://localhost:8080/```.
4. Try to brake it. :)

Finally, if you have any questions, remarks or suggestions, don't hesitate to contact me.