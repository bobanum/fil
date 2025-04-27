import Dialog from "../../webponents/Dialog/index.js";

/**
 * Represents the Fe component.
 * @extends Dialog
 */
export default class Fe extends Dialog { 
    /**
     * The tag name of the Fe component.
     * @type {string}
     */
    static _tagName = 'fil-fe';

    /**
     * The template file for the Fe component. (optional)
     * @type {string}
     */
    static _styleUrl = "fe.css";
    // constructor() {
    //     super();
    //     console.log('Fe constructor', this.constructor, super.constructor);
    // }
    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log('Fe constructor', this.constructor, super.constructor);

    // }
}
export class Fex extends Dialog {
    /**
     * The tag name of the Fe component.
     * @type {string}
     */
    static _tagName = 'fil-fe';

    /**
     * The template file for the Fe component. (optional)
     * @type {string}
     */
    static _styleUrl = "fe.css";

    constructor() {
        super();
        console.log('Fe constructor', this.constructor);
        
    }

    /**
     * Called when the Fe component is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        console.log(super.constructor.name);
        
        this.shadowRoot.appendChild(document.createElement('slot'));
        return;
    }
    static DOM = {
        main: () => {
            alert('DOM.main');
            const main = document.createElement('div');
            main.textContent = 'Fe Component';
            return main;
        },
    };
    /**
     * Event handlers for the Fe component.
     * @type {Object}
     */
    static EVT = {
        ".selector": {
            /**
             * Event handler for the specified event.
             * @param {Event} e - The event object.
             */
            eventName: (e) => {
                // Event handler logic
            },
        },
    };
    slotEvt = {
        "": (e) => {
            console.log(this, 'Unnamed slot changed');
        },
        "name": (e) => {
            console.log(this, 'Slot "name" changed');
        }
    };

    /**
     * The observed attributes for the Fe component.
     * @type {Object}
     */
    static observedProps = {
        'attribute': {
            /**
             * Setter function for the 'attribute' attribute.
             * @param {any} value - The new value of the attribute.
             */
            set: function (value) {
                // Setter logic
            },
        },
    };
}

/**
 * Initializes the Fe component.
 */
Fe.init(import.meta);