# RAD-Components - The Tooltip
Reusable, Accessible, Dynamic Components

<h2>Screen Reader Considerations<h2>

<h3>The Modal Dialog Container</h3>

To assist Screen reader users in understanding the contents of the modal dialog itself, the followng must be applied;

* The <div> containing dialog content is positioned outside of the <main> at the end of the DOM.
* The first heading in a modal dialog must be an <h2>.
* The modal dialog container must have a role="dialog" attribute for screen reader users.
* The modal dialog container should have the tabindex attribute with a value of -1 by default. This allows it to be programmatically focusable as a <div> is not a native interactive html element. 
* Finally, the modal dialog container must have an aria-labelledby attribute with an ID pointing to the main heading of the dialog. This will label the dialog to assist screen reader users.
* The close <button> within the dialog has hidden text specifically for screen reader users specifying what it will close. This text is not visible on screen but is announced by screen reader softwares.
Keyboard-only Considerations

<h3>When the Modal Dialog is Opened</h3>

* The .focus() should be set to the dialog container.
* All elements behind the dialog must not be focusable when navigating with a keyboard-only (TAB key). This can be done by setting aria-hidden to true and tabindex="-1" to the <main> ;.

<h3>To Close the Modal Dialog</h3>

* Users must be able to close the modal dialog using a close <button> within the dialog itself. The close button must be placed as the last element in the dialog container in the DOM, and positioned using CSS.
* Users should be able to close the modal dialog by pressing the ESC button (keyCode == 27). When ESC is pressed, the .focus()
* Users can close the dialog by mouse clicking outside the dialog container.
* If users close the dialog container using a keyboard or a screen reader, the keyboard focus and screen reader cursor should be positioned to the button that triggered the dialog.
* Ensure to remove the aria-hidden from the <main> and set the tabindex of all focusable elements back to their original values.
