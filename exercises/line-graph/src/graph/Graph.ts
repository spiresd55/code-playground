import {TwoDimensionalPoint} from "./2dPoint";

export interface TwoDimensionalGraph {
    points: TwoDimensionalPoint[];
    canvasHeight: string;
    canvasWidth: string;
    maxX: string;
    maxY: string;
    draw: (points: [TwoDimensionalPoint]) => void;
}