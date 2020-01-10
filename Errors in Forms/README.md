# RAD-Components - Errors in Forms
Reusable, Accessible, Dynamic Components

<h2>Supporting Notes</h2>
<h3>The Error Message</h3>
        <ul>
            <li>The &lt;span&gt; that will dynamically be updated wih the error message is empty on page load.</li> 
            <li>It has the attribute aria-live set to assertive and the aria role of alert - this means content added to this dynamically (when an error is present) will be automatically announced by screen reader softwares and users will hear that the content is an 'alert'.</li>
            <li>The id of the error message is associated to the &lt;input&gt; using aria-describedby. This means when the input has the keyboard focus, screen reader software will announce the error message content.</li>
            <li>When the error is no longer present, the spans content is emptied.</li>
            <li>The icon used to visually indicate an error is visible is purely decorative. It has been intentionally hidden from screen reader softwares using the aria-hidden attribute with a value of true.</li>
            <li>It is important that error message contents informs users how to ammend their error, rather than just "Please enter a value". For more complex entries such as entering an email it is good practise to include an example to help users complete a form.</li>
        </ul>
<h3>The Input</h3>
        <ul>
            <li>The Label is associated explicity using For / ID. This ensures the label is announced by screen reader softwares when it has focus.</li>
            <li>Rather than using the HTML5 attribute of 'required', instead aria-required=true is applied. This results in more consistent outputs for more screen readers softwares across browsers.</li>
            <li>The asterisks that visually indicates the field is required, and the colon are purely decorative. They have been intentionally hidden from screen reader softwares using the aria-hidden attribute with a value of true.</li>
            <li>When an error is detected, the attribute aria-invalid is added to the input, set to true. This informs VoiceOver users that the current contents of the form element is invalid.</li>
            <li>When the error is no longer present, the aria-invalid attribute is removed.</li>
        </ul>
<h3>Design Considerations</h3>
        <ul>
            <li>When an error is present it is important to ensure the form field is highlighted without relying on colour alone - this is incorrectly commonly seen as only changing the border colour to red.</li>
            <li>It is important to ensure users with colourblindness or other visual impairments are able to distinguish an error is present. Ensure designs can be understood in black and white.</li>
        </ul>
        
