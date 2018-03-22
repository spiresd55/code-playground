console.log("CREATING A SHADOW DOM");


//code based on this documentation
//https://developers.google.com/web/fundamentals/web-components/shadowdom

const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; //can also use append child
console.log(header.getElementsByTagName('h1'));

const headerClose = document.createElement('header');
const shadowRootClose = headerClose.attachShadow({mode: 'closed'});
shadowRootClose.innerHTML = '<h1>Hello Close Shadow DOM</h1>'; //can also use append child
//console.log(shadowRootClose.getElementsByTagName('h1')); //Will be unable to access the dom html video tags do this
//ABOVE CODE WILL RESULT IN AN ERROR
//Shouldn't use
//False sense of security, Element.prototype.attachShadow can be overwritten
// Custom components cant access the dom
// End users will get frustrated and fork your code

//Events do not propagate out of the shadowdom

//Creating a custom element in Javascript
customElements.define('custom-element', class extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to <CUSTOM-ELEMENT>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="main.css" />
         <style>#custom-element { background-color: green}</style> <!-- styles are scoped to fancy-tabs! -->
        <div id="custom-element"></div>

         
        <!-- Default slot. If there's more than one default slot, the first is used. -->
        <slot></slot>

        <slot name="subtitle">fallback content</slot> <!-- default slot with fallback content -->

        <slot name="subsection"> <!-- default slot entire DOM tree as fallback -->
            <h2>Title</h2>
            <summary>Description text</summary>
        </slot>
`;
    }
});
