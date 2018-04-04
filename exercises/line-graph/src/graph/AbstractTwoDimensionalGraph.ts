import {TwoDimensionalGraph} from "./Graph";
import {TwoDimensionalPoint} from "./2dPoint";

export abstract class AbstractTwoDimensionalGraph
    extends HTMLElement implements TwoDimensionalGraph {

    points: TwoDimensionalPoint[];
    abstract draw(points: [TwoDimensionalPoint]): void;

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
}