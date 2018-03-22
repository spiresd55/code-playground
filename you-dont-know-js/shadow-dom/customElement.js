//https://developers.google.com/web/fundamentals/web-components/customelements#fromtemplate
//WIll build a custom component library
//Read this about attribute changes
//https://developers.google.com/web/fundamentals/web-components/customelements#attrchanges


class AppDrawer extends HTMLElement {
    //Observed Attributes Can Be Watched For Changes
    static get observedAttributes() {
        return ['disabled', 'open'];
    }

    // A getter/setter for an open property.
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        console.log('Called open setter');
        console.log(val);
        // Reflect the value of the open property as an HTML attribute.
        if (val !== null || val !== 'undefined') {
            this.setAttribute('open', val);
        }
    }

    // A getter/setter for a disabled property.
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.
        super();

        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            if (this.disabled) {
                return;
            }
            this.toggleDrawer();
        });

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = '<p>HERE IS SOME TEXT</p>';

        //Bind This
        this.toggleDrawer.bind(this);

    }

    toggleDrawer() {
        console.log('TOGGLE DRAWER');
        console.log(this.open);
        this.open = !this.open;
    }

    connectedCallback() {
        console.log('Connected Event Fired, Called When Element Is Inserted Into The Dom');
        this.open = false;
    }

    disconnectedCallback() {
        console.log('Disconnection Event Fired, Called When Element Is Removed From The Dom');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute Change Event Fired, Attribute ${name} changed from ${oldValue} to ${newValue}`);
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }

        if(this.open) {

        }
        // TODO: also react to the open attribute changing.
    }

}


//How to use custom element
//window.customElements.define('app-drawer', AppDrawer);
customElements.define('app-drawer', AppDrawer);