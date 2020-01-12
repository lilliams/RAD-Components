# RAD-Components - An Accordion
Reusable, Accessible, Dynamic Components

<h2>Supporting Notes</h2>
<h3>Accordion Button</h3>
<ul>
    <li>The element that triggers the accordion to expand / collapse has intentionally been implemented as a standard html button. This is because it is keyboard accessible by default.</li>
    <li>Each button has the attribute aria-expanded, JS is used to set the value of this to true / false depending on if it is expanded or collapsed. This informs screen reader users of the present state of the button.</li>
    <li>The aria-controls attribute is used with an ID referencing the content region.</li>
    <li>The icon used is purely decorative so it hidden from users using aria-hidden=true.</li>
</ul>
<h3>Accordion Content</h3>
<ul>
    <li>Each content area has the role of region to assist screen reader users knowing where the applicable content starts and ends.</li>
    <li>The region is labelled using aria-labelledby, with an ID referencing the contents of the applicable button. This labels the region for screen reader users.</li>
</ul>
