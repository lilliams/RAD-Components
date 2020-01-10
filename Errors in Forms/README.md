#RAD-Components - A Modal Dialog
Reusable, Accessible, Dynamic Components

<h2>Supporting Notes</h2>
<h3>The Error Message</h3>
* The span that will dynamically be updated wih the error message is empty on page load.
* It has the attribute aria-live set to assertive and the aria role of alert - this means content added to this dynamically (when an error is present) will be automatically announced by screen reader softwares and users will hear that the content is an 'alert'.
* The id of the error message is associated to the <input> using aria-describedby. This means when the input has the keyboard focus, screen reader software will announce the error message content.
* When the error is no longer present, the spans content is emptied.
* The icon used to visually indicate an error is visible is purely decorative. It has been intentionally hidden from screen reader softwares using the aria-hidden attribute with a value of true.
* It is important that error message contents informs users how to ammend their error, rather than just "Please enter a value". For more complex entries such as entering an email it is good practise to include an example to help users complete a form.
