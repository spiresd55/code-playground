import {TwoDimensionalPoint} from "./2dPoint";

//This interface could eventually support negative coordinate points (-x,-y) to (x,y)
export interface TwoDimensionalGraph {
    points: TwoDimensionalPoint[]; //Coordinate Points For Line Graph
    userPoints: string; //User entered input for coordinates
    canvasHeight: string; //HTML Canvas Height
    canvasWidth: string; //HTML Canvas Width
    maxX: string; //Maximum Value for X Coordinate
    maxY: string; //Maximum Value for Y Coordinate
    draw: (points: [TwoDimensionalPoint]) => void; //Method should draw lines on the canvas
}