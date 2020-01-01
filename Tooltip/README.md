# RAD-Components - The Tooltip
Reusable, Accessible, Dynamic Components

Keyboard-only Considerations

To ensure the tooltip is operable for users with motor impairments (such as a tremor) who rely on keyboard-only access, the following has been taken in to consideration:

* A <button> element has been used to implement the tool tip and contain the icon. This is because this default element is keyboard-only accessible by default. It receives focus when TAB is pressed, and operates upon pressing SPACE / ENTER.
* IF the tool tip is visible, keyboard-only users are able to close the tooltip by pressing the ESC key. Once ESC is pressed, the .focus() is set to the button that triggered the tooltip to be visible. This ensures users focus is not lost on the page.
* When a keyboard only user presses the close button within the tooltip the .focus() is again set back to the button that triggered the tooltip to be visible.

Screen reader Considerations

To ensure the tooltip is accessible to screen reader users, the following has been taken into consideration:

* The <button> the tooltip has the WAI-ARIA attribute of aria-expanded=false. On click this is dynamically changed to true. This informs VoiceOver users that the button expands / collapses additional content.
* The <button> triggering the tooltip has the attribute of aria-controls with an ID pointing to the tooltip content itself.
* The <button> triggering the tooltip has hidden text specifically for screen reader users giving the button a meaningful label for VoiceOver users. This is exposed to screen reader softwares but is not visible on screen (unless CSS is disabled).
         
&lt;button id="tooltip-btn" aria-expanded="false" aria-controls="tooltip">
   &lt;i class="fas fa-info-circle" aria-hidden="true">&lt;/i>
   &lt;span class="a11y-hidden">More Information on Water bears&lt;/span>
&lt;/button>
            
* The <div> containing the tooltip content has the role=group - this allows screen reader users to associate all the content within the "group" together.
* The <div> also has an aria-label specifically labelling the purpose of the tool tip - i.e. "More information on Water Bears".
        
&lt;div class="tooltip-content hidden" id="tooltip" role="group" aria-label="More information on Water bears">
   &lt;p class="tooltip-msg">A Water bear is ...&lt;/p>
   &lt;button id="close-btn">
       &lt;i class="fas fa-times" aria-hidden="true">&lt;/i>
       &lt;span class="a11y-hidden">Close More information on Water Bears&lt;/span>
   &lt;/button>
&lt;/div>
            
Additional Info

* If a user mouse clicks any where else on the page (aside from the tooltip itself) then it must no longer be visible. It is common for users with low vision to complain about tool tip content blocking other content. They expect if they click else where with their cursor that it will no longer be visible.
* For users with visual impairments who rely on screen magnification software to access the web, the tooltip must always be visible and not-only on mouse hover.
* Finally the tooltip contains a 'Close' button. This assists users with cognitive impairments who may be unaware of how to close the tooltip.
