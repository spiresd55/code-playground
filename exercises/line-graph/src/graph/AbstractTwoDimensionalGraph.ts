import {TwoDimensionalGraph} from "./TwoDimensionalGraph";
import {TwoDimensionalPoint} from "./2dPoint";
import {ProjectComponent} from "../ProjectComponent";

//Extends HTML Element, since this component with initialize a custom element using HTMLElement
//See using custom components docs: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
export abstract class AbstractTwoDimensionalGraph
    extends HTMLElement implements TwoDimensionalGraph, ProjectComponent {

    points: TwoDimensionalPoint[];
    abstract draw(points: [TwoDimensionalPoint]): void;
    abstract render():void;
    abstract connectedCallback():void;

    //Getters and setters for component properties
    set canvasHeight(height: string) {
        this.setAttribute("canvas-height", height);
    }

    get canvasHeight(): string {
        return this.getAttribute("canvas-height");
    }

    set canvasWidth(width: string) {
        this.setAttribute("canvas-width", width);
    }

    get canvasWidth(): string {
        return this.getAttribute("canvas-width");
    }

    set maxX(max: string) {
        this.setAttribute("max-x", max);
    }

    get maxX(): string {
        return this.getAttribute("max-x");
    }

    set maxY(max: string) {
        this.setAttribute("max-y", max);
    }

    get maxY(): string {
        return this.getAttribute("max-y");
    }

    set userPoints(points: string) {
        this.setAttribute("points", points);
    }

    get userPoints(): string {
        return this.getAttribute("points");
    }

    //Allows array strings to be passed into component and converted to TwoDimensionalPoints
    convertTupleToPointArray(arr: any[]): TwoDimensionalPoint[] {
        return arr.map((point: any[]) => {
           return new TwoDimensionalPoint(point[0], point[1]);
        });
    }
}